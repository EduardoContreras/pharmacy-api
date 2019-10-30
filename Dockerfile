FROM node:10-alpine AS base

#WORKDIR /usr/src/app
WORKDIR /app

# Copy project specification and dependencies lock files
COPY package*.json ./

RUN npm install

### RELEASE requiere autorization
# FROM gascregistry.azurecr.io/builds/node:10-alpine
# COPY --from=base /app/node_modules ./node_modules

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]