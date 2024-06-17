FROM node:18-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и yarn.lock
COPY package.json ./

# Установка зависимостей
RUN yarn install

# Копирование исходного кода приложения
COPY . .

# Сборка приложения
RUN yarn run build

# Команда для запуска приложения в режиме предпросмотра
CMD ["yarn", "serve"]