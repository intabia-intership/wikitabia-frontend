FROM node:14.18.2 AS build
ARG AUTH
WORKDIR /usr/src/app
COPY package.json package-lock.json .npmrc ./
RUN npm set _auth $AUTH
RUN npm ci
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build  /usr/src/app/dist/wikitabia /usr/share/nginx/html