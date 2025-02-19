FROM node:20-alpine3.18 AS builder

# Configurar directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY pnpm-lock.yaml package.json ./

# Instalar pnpm
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copiar el resto del código
COPY . .

EXPOSE 5173

# Construir la aplicación
CMD ["pnpm", "dev"]
