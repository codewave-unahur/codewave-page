FROM node:20-alpine3.18 AS builder

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM alpine:latest AS deploy

WORKDIR /dist

COPY --from=builder /app/dist /dist

VOLUME [ "/dist" ]