# Docker-Front-End
Front End App para probar como generar una imagen a partir de un archivo dockerfile, luego generar un contenedor y mostrar una arquitectura que funciona y utiliza (03) Contenedores.

La app espera un servicio ejecutandose localmente en el puerto 3000
http://localhost:3000/users-db

Nota: Se debe tener instalado Docker

# Actualizar dependencias
npm install

# Comando para generar la imagen segun el docker file existente
docker build -t front-end:ivan . 

# Ejecutar Contenedor
docker run -d --name front -p 8080:80 front-end:ivan 

# Imagen publica de esta app
docker pull ivanpc/front-end:ivan
