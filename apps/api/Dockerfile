FROM node:18-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование package.json
COPY package*.json ./

# Установка зависимостей
RUN yarn install

# Копирование исходного кода приложения
COPY . .

# Сборка приложения
RUN yarn build

# Команда для запуска приложения
CMD ["yarn", "start:prod"]