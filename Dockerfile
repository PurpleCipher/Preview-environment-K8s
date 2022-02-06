FROM node:16-alpine as BUILDER
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

FROM node:16-alpine as PRODUCTION
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
COPY --from=BUILDER /usr/src/app .
CMD ["node", "bin"]
