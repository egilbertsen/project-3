module.exports = function (sequelize, DataTypes) {
    let Winery = sequelize.define('Winery', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    Winery.associate = function(models) {
        Winery.belongsToMany(models.List, {through: 'ListWinery'});
    }

    return Winery;
}