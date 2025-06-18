# 🤖 Chatbot con IA - Tour Capachica (Google Gemini)

## 📋 Descripción

El chatbot de Tour Capachica utiliza **Google Gemini** para proporcionar respuestas naturales y precisas basadas en datos reales de la base de datos.

## ✨ Características

- **🔍 Consulta Base de Datos Real**: Accede a servicios, paquetes, disponibilidad y reseñas
- **🤖 Respuestas con IA**: Usa Google Gemini para generar respuestas naturales
- **🔄 Fallback Inteligente**: Respuestas predefinidas si Gemini no está disponible
- **👤 Autenticación Opcional**: Funciona con y sin autenticación de usuario
- **💾 Historial de Chat**: Guarda conversaciones para usuarios autenticados
- **💰 Económico**: Gemini es más económico que OpenAI

## 🚀 Instalación

### 1. Instalar dependencias
```bash
npm install @google/generative-ai
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Google Gemini Configuration
GEMINI_API_KEY=tu_api_key_aqui
GEMINI_MODEL=gemini-1.5-flash
GEMINI_TEMPERATURE=0.7
GEMINI_MAX_TOKENS=1000

# Base de datos (ya configurada)
DATABASE_URL=tu_database_url
```

### 3. Obtener API Key de Google Gemini

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Create API Key"
4. Copia la API key y agrégala a tu `.env`

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `GEMINI_API_KEY` | Tu API key de Google Gemini | - |
| `GEMINI_MODEL` | Modelo de Gemini a usar | `gemini-1.5-flash` |
| `GEMINI_TEMPERATURE` | Creatividad de las respuestas (0-1) | `0.7` |
| `GEMINI_MAX_TOKENS` | Máximo de tokens por respuesta | `1000` |

### Configuración sin Gemini

Si no configuras `GEMINI_API_KEY`, el chatbot usará respuestas predefinidas:

```bash
# El chatbot funcionará sin Gemini
npm run start
```

## 📡 API Endpoints

### 1. Enviar Mensaje (Con/Sin Autenticación)
```http
POST /api/chatbot/send
Content-Type: application/json

{
  "message": "¿Qué tours hay disponibles hoy?"
}
```

**Respuesta (Usuario No Autenticado):**
```json
{
  "response": "Basándome en nuestra base de datos, actualmente tenemos disponibles..."
}
```

**Respuesta (Usuario Autenticado):**
```json
{
  "id": 123,
  "userId": 456,
  "message": "¿Qué tours hay disponibles hoy?",
  "response": "Basándome en nuestra base de datos...",
  "timestamp": "2024-01-15T10:30:00Z",
  "isUserMessage": false
}
```

### 2. Obtener Historial (Solo Autenticados)
```http
GET /api/chatbot/history?limit=50
Authorization: Bearer <token>
```

### 3. Limpiar Historial (Solo Autenticados)
```http
DELETE /api/chatbot/history
Authorization: Bearer <token>
```

### 4. Información de Ayuda
```http
GET /api/chatbot/help
```

### 5. Estadísticas (Solo Admin)
```http
GET /api/chatbot/stats
Authorization: Bearer <token>
```

## 🧪 Pruebas

### Ejecutar pruebas automáticas
```bash
chmod +x test-chatbot-gemini.sh
./test-chatbot-gemini.sh
```

### Pruebas manuales con curl

```bash
# Mensaje sin autenticación
curl -X POST http://localhost:3000/api/chatbot/send \
  -H "Content-Type: application/json" \
  -d '{"message": "¿Qué servicios ofrecen?"}'

# Mensaje con autenticación
curl -X POST http://localhost:3000/api/chatbot/send \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <tu_token>" \
  -d '{"message": "¿Cuánto cuesta un paquete?"}'
```

## 🔍 Datos que Consulta la IA

El chatbot consulta automáticamente:

### 📊 Servicios
- Nombre y descripción
- Tipo de servicio
- Precio base
- Disponibilidad y cupos
- Estado (activo/inactivo)

### 🎒 Paquetes Turísticos
- Nombre y descripción
- Emprendimiento asociado
- Precio
- Servicios incluidos
- Disponibilidad

### ⭐ Reseñas
- Calificaciones recientes
- Comentarios de clientes
- Servicios evaluados

### 📅 Disponibilidad
- Fechas disponibles
- Cupos restantes
- Precios especiales

## 💡 Ejemplos de Uso

### Preguntas que puede responder:

1. **"¿Qué tours hay disponibles hoy?"**
   - Consulta `DisponibilidadPaquete` y `ServicioDisponibilidad`
   - Responde con tours activos y con cupos

2. **"¿Cuánto cuesta un paquete completo?"**
   - Consulta `PaqueteTuristico` con precios
   - Incluye servicios incluidos

3. **"¿Qué dicen los clientes sobre sus servicios?"**
   - Consulta `Resena` recientes
   - Muestra calificaciones y comentarios

4. **"¿Hay cupos para este fin de semana?"**
   - Verifica disponibilidad específica
   - Responde con fechas y cupos

5. **"¿Puedo hacer una reserva para 4 personas?"**
   - Verifica cupos disponibles
   - Proporciona información de contacto

## 🛠️ Personalización

### Modificar el Prompt del Sistema

Edita `src/chatbot/chatbot.service.ts`:

```typescript
// En buildPrompt()
context += 'INSTRUCCIONES:\n';
context += 'Eres un asistente turístico experto de Tour Capachica...';
```

### Agregar Nuevas Consultas

En `getContextData()`:

```typescript
// Agregar nueva consulta
const nuevosDatos = await this.prisma.nuevaTabla.findMany({
  where: { estado: 'activo' }
});
```

### Modificar Respuestas de Fallback

En `generateFallbackResponse()`:

```typescript
if (lowerMessage.includes('nueva_palabra_clave')) {
  return 'Tu respuesta personalizada aquí';
}
```

## 🔒 Seguridad

- **API Key Protegida**: No se expone en el código
- **Validación de Entrada**: Sanitización de mensajes
- **Rate Limiting**: Configurable para evitar abuso
- **Logs Seguros**: No registra información sensible

## 📊 Monitoreo

### Logs del Sistema
```bash
# Ver logs del chatbot
tail -f logs/chatbot.log
```

### Métricas Disponibles
- Total de mensajes procesados
- Usuarios únicos
- Mensajes por día
- Promedio de mensajes por usuario

## 🚨 Troubleshooting

### Error: "Gemini API key not configured"
```bash
# Solución: Configurar API key
export GEMINI_API_KEY="tu_key_aqui"
```

### Error: "Database connection failed"
```bash
# Verificar conexión a BD
npx prisma db push
```

### Error: "Rate limit exceeded"
```bash
# Reducir frecuencia de requests
# O actualizar plan de Google AI
```

## 💰 Ventajas de Google Gemini

- **Más Económico**: Menor costo por request que OpenAI
- **Mejor Rendimiento**: Respuestas más rápidas
- **Límites Generosos**: Mayor cuota gratuita
- **Integración Google**: Fácil integración con servicios de Google

## 📞 Soporte

Para problemas o preguntas:
- 📧 Email: soporte@tourcapachica.com
- 📱 WhatsApp: +51 999 888 777
- 🐛 Issues: GitHub repository

---

**¡El chatbot con Google Gemini está listo para mejorar la experiencia de tus usuarios! 🎉** 