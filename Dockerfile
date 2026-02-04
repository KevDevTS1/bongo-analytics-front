# -------- Build stage --------
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar solo manifests primero (cache real)
COPY package.json package-lock.json ./

# Instalar dependencias necesarias para build
RUN npm ci --prefer-offline --no-audit --progress=false

# Copiar el resto del código
COPY . .

# Build
RUN npm run build


# -------- Production stage --------
FROM nginx:1.25-alpine

RUN apk add --no-cache dumb-init

# Configuración nginx
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/entrypoint.sh /entrypoint.sh

# Artefactos finales
COPY --from=builder /app/dist /usr/share/nginx/html

RUN chmod +x /entrypoint.sh && \
    chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["/entrypoint.sh"]