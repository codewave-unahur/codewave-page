FROM node:20-alpine3.18 AS build

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . . 

RUN pnpm build

FROM nginx:1.27.4-perl

# Copiar los archivos estáticos generados en la carpeta dist
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]