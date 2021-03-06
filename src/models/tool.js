const { Model, DataTypes } = require('sequelize');

class Tool extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    }, {
      sequelize,
      tableName: 'tools',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Tag, { foreignKey: 'tool_id', through: 'tool_tags', as: 'tags' });
  }
}

module.exports = Tool;
