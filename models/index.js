const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Member = require('./member')(sequelize, Sequelize.DataTypes);
const Tournament = require('./tournament')(sequelize, Sequelize.DataTypes);
const MemberTournament = require('./memberTournament')(sequelize, Sequelize.DataTypes);

// Associations
Member.belongsToMany(Tournament, {
  through: MemberTournament,
  foreignKey: 'memberId',
});
Tournament.belongsToMany(Member, {
  through: MemberTournament,
  foreignKey: 'tournamentId',
});

module.exports = {
  sequelize,
  Member,
  Tournament,
  MemberTournament,
};
