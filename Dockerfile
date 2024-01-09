FROM node:20.10.0

COPY . .
RUN npm install

CMD ["node", "./server.js"]