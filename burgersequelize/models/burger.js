module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {



    name: DataTypes.STRING
  },

    {

      classMethods: {
        associate: function(models) {


          burger.hasMany(models.Post);
        }
      }
    });
  return burger;
};