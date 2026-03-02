# Etapa 1: Construcción
FROM node:lts-alpine AS build
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción (Nginx)
FROM nginx:alpine
# Astro por defecto genera el contenido en la carpeta 'dist'
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 para el tráfico HTTP
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]