import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// Реєстрація користувача
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, phone, password, userType, location } = req.body;

    // Перевірка чи існує користувач з таким email
    const [existingUsers] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Користувач з таким email вже існує' });
    }

    // Хешування паролю
    const hashedPassword = await bcrypt.hash(password, 10);

    // Додавання користувача в базу даних
    const [result] = await db.query(
      'INSERT INTO users (full_name, email, phone, password, user_type, location) VALUES (?, ?, ?, ?, ?, ?)',
      [fullName, email, phone, hashedPassword, userType, location]
    );

    res.status(201).json({ 
      message: 'Реєстрація успішна',
      userId: result.insertId 
    });

  } catch (error) {
    console.error('Помилка при реєстрації:', error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

// Вхід
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.json({ message: 'Введіть email і пароль' });
  try {
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) return res.json({ message: 'Користувача не знайдено' });
    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: 'Невірний пароль' });
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Вхід успішний', token });
  } catch (err) {
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

export default router; 