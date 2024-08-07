# API для управления коллекцией книг

Этот проект представляет собой RESTful API для управления коллекцией книг с расширенными функциями, включая управление пользователями и контроль доступа на основе ролей с использованием битовых масок.

## Возможности

- Добавление, просмотр, обновление и удаление книг
- Регистрация и аутентификация пользователей
- Контроль доступа на основе ролей с использованием JWT
- Безопасное хранение паролей с использованием bcrypt
- Использование PostgreSQL в качестве базы данных с ORM Prisma

## Технологии

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT (JSON Web Tokens)
- bcrypt

## Требования

- Установленные Docker и Docker Compose

## Начало работы

### Клонирование репозитория

```sh
git clone <repository-url>
cd <repository-folder>
```

### Переменные окружения

```env
DATABASE_URL="postgresql://store_user:store_password@pg_store_db:5432/store_db"
JWT_SECRET="your_jwt_secret"
```

### Запуск контейнера и миграция Prisma
```sh
docker-compose up --build
docker-compose exec app npx prisma migrate dev --name init
```
