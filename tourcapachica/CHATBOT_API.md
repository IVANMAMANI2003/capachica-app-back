# API del Chatbot - Tour Capachica

## Descripción
El módulo Chatbot proporciona un asistente virtual inteligente para ayudar a los usuarios con información sobre servicios turísticos en Capachica.

## Endpoints Disponibles

### 1. Información de Ayuda (Público)
```
GET /chatbot/public/help
```

**Descripción:** Obtiene información general sobre las capacidades del chatbot.

**Respuesta:**
```json
{
  "message": "¡Hola! Soy el asistente virtual de Tour Capachica.",
  "capabilities": [
    "Información sobre servicios turísticos",
    "Precios y paquetes",
    "Reservas y disponibilidad",
    "Ubicación y cómo llegar",
    "Horarios de atención",
    "Información general sobre Capachica"
  ],
  "examples": [
    "¿Qué servicios ofrecen?",
    "¿Cuánto cuesta un tour?",
    "¿Cómo hago una reserva?",
    "¿Dónde están ubicados?",
    "¿Cuáles son sus horarios?"
  ],
  "contact": {
    "whatsapp": "+51 999 888 777",
    "email": "info@tourcapachica.com",
    "phone": "+51 51 123 456"
  }
}
```

### 2. Enviar Mensaje (Público)
```
POST /chatbot/public/send
```

**Descripción:** Envía un mensaje al chatbot sin necesidad de autenticación.

**Cuerpo de la petición:**
```json
{
  "message": "¿Qué servicios ofrecen?"
}
```

**Respuesta:**
```json
{
  "response": "Ofrecemos diversos servicios turísticos en Capachica:\n\n🏖️ Tours por las islas del lago Titicaca\n🏠 Hospedaje en casas rurales\n🍽️ Gastronomía local\n🚣 Actividades acuáticas\n🏔️ Trekking y senderismo\n📸 Tours fotográficos\n\n¿Te gustaría conocer más detalles sobre alguno de estos servicios?"
}
```

### 3. Enviar Mensaje (Autenticado)
```
POST /chatbot/send
```

**Descripción:** Envía un mensaje al chatbot con autenticación. Guarda el historial del usuario.

**Headers:**
```
Authorization: Bearer <token_jwt>
Content-Type: application/json
```

**Cuerpo de la petición:**
```json
{
  "message": "¿Cuánto cuesta un tour?"
}
```

**Respuesta:**
```json
{
  "id": 1,
  "userId": 1,
  "message": "¿Cuánto cuesta un tour?",
  "response": "Los precios varían según el servicio y la temporada:\n\n• Tours de medio día: desde S/ 50\n• Tours de día completo: desde S/ 100\n• Hospedaje por noche: desde S/ 80\n• Paquetes completos: desde S/ 300\n\n¿Te gustaría que te ayude a hacer una reserva o necesitas más información específica?",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "isUserMessage": false
}
```

### 4. Obtener Historial de Chat
```
GET /chatbot/history?limit=50
```

**Descripción:** Obtiene el historial de mensajes del usuario autenticado.

**Headers:**
```
Authorization: Bearer <token_jwt>
```

**Parámetros de query:**
- `limit` (opcional): Número máximo de mensajes a obtener (default: 50)

**Respuesta:**
```json
[
  {
    "id": 2,
    "userId": 1,
    "message": "¿Cuánto cuesta un tour?",
    "response": "Los precios varían según el servicio...",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "isUserMessage": false
  },
  {
    "id": 1,
    "userId": 1,
    "message": "Hola",
    "response": "¡Hola! Soy el asistente virtual...",
    "timestamp": "2024-01-15T10:25:00.000Z",
    "isUserMessage": false
  }
]
```

### 5. Obtener Estadísticas (Solo SuperAdmin)
```
GET /chatbot/stats
```

**Descripción:** Obtiene estadísticas del chatbot (solo para SuperAdmin).

**Headers:**
```
Authorization: Bearer <token_jwt>
```

**Respuesta:**
```json
{
  "totalMessages": 150,
  "uniqueUsers": 25,
  "todayMessages": 12,
  "averageMessagesPerUser": 6.0
}
```

### 6. Eliminar Historial de Chat
```
DELETE /chatbot/history
```

**Descripción:** Elimina todo el historial de chat del usuario autenticado.

**Headers:**
```
Authorization: Bearer <token_jwt>
```

**Respuesta:**
```json
{
  "message": "Historial de chat eliminado exitosamente"
}
```

## Tipos de Respuestas del Chatbot

El chatbot puede responder a diferentes tipos de preguntas:

### Saludos
- "Hola", "Buenos días", "Buenas"
- Respuesta: Saludo inicial y presentación

### Servicios
- "¿Qué servicios ofrecen?", "¿Qué tienen?"
- Respuesta: Lista de servicios turísticos disponibles

### Precios
- "¿Cuánto cuesta?", "Precios", "Costo"
- Respuesta: Información sobre precios y paquetes

### Reservas
- "¿Cómo hago una reserva?", "Reservar", "Booking"
- Respuesta: Opciones para hacer reservas

### Ubicación
- "¿Dónde están ubicados?", "Dirección", "Ubicación"
- Respuesta: Información de ubicación

### Horarios
- "¿Cuáles son sus horarios?", "¿Cuándo abren?"
- Respuesta: Horarios de atención

### Agradecimientos
- "Gracias", "Thank you"
- Respuesta: Mensaje de despedida

## Ejemplos de Uso

### Ejemplo 1: Consulta pública
```bash
curl -X POST http://localhost:3000/chatbot/public/send \
  -H "Content-Type: application/json" \
  -d '{"message": "¿Qué servicios ofrecen?"}'
```

### Ejemplo 2: Mensaje autenticado
```bash
curl -X POST http://localhost:3000/chatbot/send \
  -H "Authorization: Bearer <tu_token>" \
  -H "Content-Type: application/json" \
  -d '{"message": "¿Cuánto cuesta un tour?"}'
```

### Ejemplo 3: Obtener historial
```bash
curl -X GET http://localhost:3000/chatbot/history \
  -H "Authorization: Bearer <tu_token>"
```

## Códigos de Error

### 400 - Datos inválidos
```json
{
  "statusCode": 400,
  "message": ["message should not be empty"],
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

### 500 - Error interno del servidor
```json
{
  "statusCode": 500,
  "message": "Error interno del servidor"
}
```

## Características del Chatbot

1. **Respuestas Inteligentes:** Utiliza palabras clave para identificar el tipo de consulta
2. **Historial Persistente:** Guarda conversaciones de usuarios autenticados
3. **Acceso Público:** Permite consultas sin autenticación
4. **Estadísticas:** Proporciona métricas de uso
5. **Emojis y Formato:** Respuestas amigables con emojis y formato estructurado
6. **Información Local:** Especializado en servicios de Capachica

## Notas Técnicas

- Los mensajes públicos no se guardan en el historial
- Solo los usuarios autenticados pueden ver su historial
- Las estadísticas solo están disponibles para SuperAdmin
- El chatbot responde en tiempo real
- Soporta mensajes de hasta 1000 caracteres 