module.exports = function (sequelize, DataTypes) {

  // when creating a List, need to send name, userId, and wineryIds
  
  var List = sequelize.define("List", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
  });

  List.associate = function (models) {
    // Foreign key name is userId
    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    // Foreign key name is wineryId
    List.belongsToMany(models.Winery, {through: 'ListWinery'});
  };

  return List;
};
