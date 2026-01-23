FROM jorgedesarrollador/ubnginx

ARG PROYECTO
ARG USUARIO
ARG TIPO

# Instalación de Node.js necesaria para compilar Astro
RUN apt-get update && apt-get install -y curl gnupg
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Directorio de trabajo para la compilación
WORKDIR /app
COPY ./proyectos/${TIPO}/${PROYECTO}/src /app

# Construcción de la aplicación Astro
RUN npm install
RUN npm run build

# Movimiento de archivos al directorio de Nginx para ser servidos
# (Asumiendo que Astro genera la carpeta 'dist')
RUN cp -r /app/dist/* /var/www/html/ 

# Configuración de usuario y SSH (Basado en tu Dockerfile original)
RUN useradd -rm -d /home/${USUARIO} -s /bin/bash ${USUARIO}
RUN echo "${USUARIO}:jorge1234" | chpasswd

EXPOSE 80 22

# Usamos el start.sh del profesor para iniciar servicios
ENTRYPOINT ["./admin/start.sh"]