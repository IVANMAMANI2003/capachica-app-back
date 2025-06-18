#!/bin/bash

echo "Probando la API de actualización de usuarios..."

# Token JWT del usuario (reemplaza con un token válido)
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidXN1YXJpb0B0b3VyY2FwYWNoaWNhLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiZW1wcmVuZGltaWVudG9JZCI6bnVsbCwiaWF0IjoxNzUwMjU1OTAzLCJleHAiOjE3NTAzNDIzMDN9.b-YQHNMOTRq2vf7DDjjp2hdh6b89wXHnsAtGIRp05-Q"

# URL del endpoint
URL="http://localhost:3000/users/1"

# Datos de prueba
JSON_DATA='{
  "persona": {
    "nombre": "Carlos",
    "apellidos": "García",
    "telefono": "123456789"
  }
}'

echo "Enviando petición PATCH a: $URL"
echo "Datos: $JSON_DATA"

# Realizar la petición
curl -X 'PATCH' \
  "$URL" \
  -H 'accept: */*' \
  -H "Authorization: Bearer $TOKEN" \
  -H 'Content-Type: application/json' \
  -d "$JSON_DATA" \
  -w "\nHTTP Status: %{http_code}\n"

echo ""
echo "Prueba completada." 