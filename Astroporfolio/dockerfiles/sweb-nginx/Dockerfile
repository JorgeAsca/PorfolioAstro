FROM jorgeas/astroporfolio-base:latest


RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*


WORKDIR /app
COPY ./dockerfiles/sweb-nginx/admin/start.sh ./start.sh
RUN chmod +x ./start.sh


RUN rm -rf /var/www/html/*
COPY ./dist /var/www/html/

EXPOSE 80


ENTRYPOINT ["/app/start.sh"]