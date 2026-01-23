# dockerfiles/sweb/nginx/Dockerfile
FROM jorgeas/astroporfolio-base:latest

# Instalación de Nginx
RUN apt-get update && apt-get install -y nginx

RUN mkdir -p /root/admin/sweb/nginx
COPY ./dockerfiles/sweb/nginx/admin/start.sh /root/admin/sweb/nginx/start.sh
RUN chmod +x /root/admin/sweb/nginx/start.sh

EXPOSE 80

ENTRYPOINT ["/root/admin/sweb/nginx/start.sh"]