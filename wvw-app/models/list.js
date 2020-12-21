module.exports = function (sequelize, DataTypes) {
  var List = sequelize.define("List", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wineries: {
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue('wineries'));
      },
      get: function (val) {
        return this.setDataValue('wineries', JSON.stringify(val));
      }
    }
  });

  List.associate = function (models) {

    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return List;
};
