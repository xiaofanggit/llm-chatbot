# Use latest official Node.js image
FROM node:lts-alpine
ENV NODE_ENV=production
# Set working directory
WORKDIR /usr/src/app
# Install dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
# Copy source code
COPY . .
EXPOSE 3001
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
