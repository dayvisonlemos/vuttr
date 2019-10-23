const { Model, DataTypes } = require('sequelize');

class Tag extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'tags',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Tool, { foreignKey: 'tag_id', through: 'tool_tags', as: 'tools' });
  }
}

module.exports = Tag;
