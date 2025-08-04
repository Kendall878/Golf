module.exports = (sequelize, DataTypes) => {
    const MemberTournament = sequelize.define('MemberTournament', {
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tournamentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return MemberTournament;
  };
  