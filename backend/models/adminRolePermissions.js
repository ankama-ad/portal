const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminRolePermissions', {
    adminRolePermissionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'admin_role_permission_id'
    },
    adminRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_role_id'
    },
    adminRoleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_role_type_id'
    },
    adminPermissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_permission_id'
    },
    isAdd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_add'
    },
    isEdit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_edit'
    },
    isView: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_view'
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_delete'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_active'
    },
    createdBy: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname'),
      field: 'created_by'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate'),
      field: 'created_date'
    },
    modifiedBy: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname'),
      field: 'modified_by'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate'),
      field: 'modified_date'
    }
  }, {
    sequelize,
    tableName: 'admin_role_permissions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_admin_role_permission_id",
        unique: true,
        fields: [
          { name: "admin_role_permission_id" },
        ]
      },
    ]
  });
};
