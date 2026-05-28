FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/package.json

RUN pnpm install --frozen-lockfile --filter @akshay-os/api

COPY apps/api apps/api

WORKDIR /app/apps/api

ENV HOST=0.0.0.0
ENV PORT=4000

EXPOSE 4000

CMD ["pnpm", "start"]
