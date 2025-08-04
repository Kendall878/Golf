module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('Member', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      membershipType: {
        type: DataTypes.ENUM('Standard', 'Premium', 'VIP'),
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Member;
  };
  