FROM node:20-alpine3.18 AS builder

WORKDIR /app

# Copia los archivos de configuración para instalar dependencias
COPY pnpm-lock.yaml package.json ./

# Instala pnpm y las dependencias del proyecto
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copia el resto del código al contenedor
COPY . .

# Ejecuta el build
RUN pnpm build

# Listamos el contenido del directorio /app para asegurarnos de que la carpeta dist esté generada
RUN ls -R /app

FROM nginx:1.21-alpine

# Copiar los archivos estáticos generados en la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar la configuración de Nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
