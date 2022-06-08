FROM node:16-alpine as BUILD_IMAGE

RUN apk update && apk add curl bash make && rm -rf /var/cache/apk/*

WORKDIR /usr/share/api-gateway/equmedia-api

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

RUN npm prune --production

RUN npm ci

FROM node:16-alpine

WORKDIR /usr/share/api-gateway/equmedia-api

COPY --from=BUILD_IMAGE /usr/share/api-gateway/equmedia-api/dist ./dist
COPY --from=BUILD_IMAGE /usr/share/api-gateway/equmedia-api/node_modules ./node_modules

EXPOSE 60320

CMD ["node", "dist/main"]