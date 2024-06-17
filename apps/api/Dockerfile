FROM node:18-alpine

# Установка необходимых зависимостей
RUN apk add --no-cache libc6-compat

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и yarn.lock
COPY package*.json ./

# Установка зависимостей
RUN yarn install

# Копирование исходного кода приложения
COPY . .

# Сборка приложения
RUN yarn build

# Команда для запуска приложения
CMD ["yarn", "start:prod"]