const express = require('express');
const sequelize = require('./db');

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await sequelize.query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT });
  res.json(users);
});

app.listen(5000, () => console.log('Backend is running on port 5000'));
