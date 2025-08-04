const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const memberRoutes = require('./routes/memberRoutes');
const tournamentRoutes = require('./routes/tournamentRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/members', memberRoutes);
app.use('/api/tournaments', tournamentRoutes);

// Start server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
