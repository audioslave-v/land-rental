# Веб-додаток для оренди та спільного використання ділянок землі

## Структура проєкту

```
project-root/
│
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   └── models/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── main.js
│   └── styles.css
│
└── README.md
```

## Технології
- Node.js + Express (бекенд)
- MySQL (база даних)
- HTML, CSS, JS (фронтенд)

## Запуск проєкту

1. Встановіть Node.js та MySQL.
2. Склонуйте репозиторій або скопіюйте файли проєкту.
3. Перейдіть у папку `backend` та встановіть залежності:
   ```
   npm install
   ```
4. Створіть файл `.env` у папці `backend` з параметрами підключення до MySQL (приклад у файлі `.env.example`).
5. Запустіть сервер:
   ```
   node server.js
   ```
6. Відкрийте `frontend/index.html` у браузері.

---

## Короткий опис

Цей додаток дозволяє:
- Орендувати/здавати ділянки землі
- Ділитися досвідом, фото, відео, аудіо
- Коментувати публікації
- Читати статті про вирощування рослин
- Реєструватися та входити в систему 
