module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
      }
    },

    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultvalue: false,
    }
  });
  return Post;
};