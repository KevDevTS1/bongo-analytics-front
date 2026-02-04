#!/bin/sh
set -e

# Cloud Run proporciona PORT, usar 8080 por defecto
export PORT=${PORT:-8080}

echo "Starting nginx on port $PORT..."

# Generar el archivo de configuración del servidor con el puerto correcto
cat > /etc/nginx/conf.d/default.conf <<EOF
server {
    listen ${PORT};
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

 }
EOF

# Verificar configuración de nginx
nginx -t

# Iniciar nginx en foreground
exec nginx -g 'daemon off;'