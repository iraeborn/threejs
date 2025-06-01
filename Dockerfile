FROM node:18

WORKDIR /app

RUN corepack enable
COPY package.json yarn.lock ./
RUN corepack prepare yarn@4.9.1 --activate \
  && yarn install

COPY . .

EXPOSE 5173
CMD ["yarn", "dev", "--host"]