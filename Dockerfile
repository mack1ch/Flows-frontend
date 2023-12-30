FROM node:lts as dependencies
WORKDIR /flows
COPY package.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /flows
COPY . .
COPY --from=dependencies /flows/node_modules ./node_modules/
RUN npm run build

FROM node:lts as runner
WORKDIR /flows
ENV NODE_ENV production

COPY --from=builder /flows/public ./public
COPY --from=builder /flows/package.json ./package.json
COPY --from=builder /flows/.next ./.next
COPY --from=builder /flows/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
