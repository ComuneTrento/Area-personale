FROM node:lts-alpine AS build

# install simple http server for serving static content
# RUN npm install -g http-server
# EXPOSE 8080
# CMD [ "http-server", "dist" ]

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install --progress=false

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

FROM abiosoft/caddy

RUN apk --update-cache --upgrade --no-cache add curl

COPY Caddyfile /etc/

EXPOSE 2015

COPY --from=build /app/dist/* /srv/area-personale/

HEALTHCHECK --interval=5s --timeout=1s CMD curl --fail http://localhost:2015/health || exit 1

