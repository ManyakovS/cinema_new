FROM node:18-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и yarn.lock
COPY package*.json ./

# Установка зависимостей
RUN yarn install

# Копирование исходного кода приложения
COPY . .

# Установка rimraf и других необходимых глобальных зависимостей
RUN yarn global add rimraf

# Сборка приложения
RUN yarn build

# Установка web-сервера для статических файлов
RUN yarn global add serve

# Команда для запуска приложения
CMD ["serve", "-s", "dist"]