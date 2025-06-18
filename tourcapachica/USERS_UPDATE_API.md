# API de Actualización de Usuarios

## Endpoint
```
PATCH /users/:id
```

## Descripción
Permite actualizar los datos de un usuario. Los usuarios solo pueden actualizar su propio perfil, mientras que los SuperAdmin pueden actualizar cualquier perfil.

## Autenticación
Requiere token JWT válido en el header `Authorization: Bearer <token>`

## Permisos
- **User**: Puede actualizar su propio perfil
- **Emprendedor**: Puede actualizar su propio perfil  
- **SuperAdmin**: Puede actualizar cualquier perfil

## ¿Cómo se determina "su propio perfil"?

El sistema determina si un usuario puede actualizar un perfil comparando:

1. **ID del usuario autenticado**: Se extrae del token JWT (`req.user.id`)
2. **ID del usuario a actualizar**: Se obtiene del parámetro de la URL (`:id`)

### Lógica de validación:
```typescript
if (req.user.id === id) {
  // Es su propio perfil - PERMITIDO
} else {
  // No es su propio perfil - Solo SuperAdmin puede continuar
  if (!isSuperAdmin) {
    // DENEGADO
  }
}
```

### Ejemplos:

**✅ Usuario actualiza su propio perfil:**
- Usuario ID: 5
- URL: `PATCH /users/5`
- Token JWT: `{ id: 5 }`
- Resultado: `5 === 5` → **PERMITIDO**

**❌ Usuario intenta actualizar perfil de otro:**
- Usuario ID: 5
- URL: `PATCH /users/10`
- Token JWT: `{ id: 5 }`
- Resultado: `5 === 10` → **DENEGADO** (a menos que sea SuperAdmin)

**✅ SuperAdmin actualiza cualquier perfil:**
- SuperAdmin ID: 1
- URL: `PATCH /users/999`
- Token JWT: `{ id: 1 }`
- Resultado: `1 === 999` → **PERMITIDO** (por ser SuperAdmin)

## Parámetros de URL
- `id` (number): ID del usuario a actualizar

## Cuerpo de la petición (JSON)

### Campos opcionales:
- `email` (string): Nuevo email del usuario
- `persona` (object): Objeto con los datos de la persona

### Campos de persona (todos opcionales):
- `nombre` (string): Nombre de la persona
- `apellidos` (string): Apellidos de la persona
- `telefono` (string): Teléfono de la persona
- `direccion` (string): Dirección de la persona
- `fotoPerfilUrl` (string): URL de la foto de perfil
- `fechaNacimiento` (string): Fecha de nacimiento (formato: YYYY-MM-DD)
- `subdivisionId` (number): ID de la subdivisión

## Ejemplos de uso

### Actualizar solo el email:
```json
{
  "email": "nuevo.email@example.com"
}
```

### Actualizar solo datos de persona:
```json
{
  "persona": {
    "nombre": "Juan",
    "apellidos": "García",
    "telefono": "123456789"
  }
}
```

### Actualizar email y datos de persona:
```json
{
  "email": "juan.garcia@example.com",
  "persona": {
    "nombre": "Juan",
    "apellidos": "García",
    "telefono": "123456789",
    "direccion": "Calle Principal 123",
    "fechaNacimiento": "1990-01-15"
  }
}
```

## Respuesta exitosa (200)
```json
{
  "id": 1,
  "email": "juan.garcia@example.com",
  "passwordHash": "hashed_password",
  "personaId": 1,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z",
  "persona": {
    "id": 1,
    "nombre": "Juan",
    "apellidos": "García",
    "telefono": "123456789",
    "direccion": "Calle Principal 123",
    "fotoPerfilUrl": null,
    "fechaNacimiento": "1990-01-15T00:00:00.000Z",
    "subdivisionId": 1,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "usuariosRoles": [
    {
      "id": 1,
      "usuarioId": 1,
      "rolId": 1,
      "rol": {
        "id": 1,
        "nombre": "User",
        "descripcion": "Usuario regular"
      }
    }
  ],
  "imagenes": []
}
```

## Códigos de error

### 400 - Datos inválidos
```json
{
  "statusCode": 400,
  "message": ["email must be an email", "fechaNacimiento must be a valid date string"],
  "error": "Bad Request"
}
```

### 401 - No autorizado
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 403 - No tiene permisos
```json
{
  "statusCode": 403,
  "message": "No tiene permisos para actualizar este perfil"
}
```

### 404 - Usuario no encontrado
```json
{
  "statusCode": 404,
  "message": "Usuario con ID 999 no encontrado"
}
```

### 500 - Error interno del servidor
```json
{
  "statusCode": 500,
  "message": "Error al actualizar el usuario"
}
```

## Notas importantes

1. **Actualización parcial**: Solo se actualizan los campos que se envían en la petición
2. **Validación de permisos**: Los usuarios solo pueden actualizar su propio perfil
3. **Datos completos**: La respuesta incluye todos los datos del usuario (roles, imágenes, etc.)
4. **Manejo de errores**: Se incluye manejo robusto de errores con mensajes descriptivos
5. **Logging**: Se registran las operaciones para debugging
6. **Token JWT**: El ID del usuario se extrae automáticamente del token JWT
7. **Seguridad**: No es posible falsificar el ID del usuario ya que viene del token JWT firmado 