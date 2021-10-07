var contex = require("./sequalize.service");
const { Op, QueryTypes } = require("sequelize");

exports.getUserRoles = async (req, res) => {

    contex.getContext().accessLevel.findAll({
        where: { isActive: { [Op.eq]: true } }
    }).then((result) => {
        res.send(result);
    });
};

exports.getAdminRoleUsers = (req, res) => {

    if (req.params.adminRoleTypId == 1) {
        contex.sequelize.query(`
    select au.user_id No, us.first_name +' ' + us.last_name AdminName from admin_users au 
    join users us on au.user_id = us.user_id
    `, { type: QueryTypes.SELECT }).then((result) => {
            res.send(result);
        });
    } else if (req.params.adminRoleTypId == 2) {
        this.getDepartmentRoleUsers(req, res);
    } else if (req.params.adminRoleTypId == 3) {
        this.getGroupRoleUsers(req, res);
    }
    else if (req.params.adminRoleTypId == 4) {
        this.getDepartmentRoleUsers(req, res);
    }
};

exports.getDepartmentRoleUsers = (req, res) => {
    contex.sequelize.query(`
    SELECT
      da.department_id departmentId,
	 dp.department_name departmentName,
      da.user_id userId,
	  us.first_name + ' '+ us.last_name adminName
  FROM [dbo].[department_admin] da
   join Departments dp on da.department_id = dp.department_id
   join Users us on da.user_id = us.user_id
   where dp.is_active = 1 and da.admin_role_id = ${req.params.adminRoleId}
    `, { type: QueryTypes.SELECT }).then((result) => {
        res.send(result);
    });
};

exports.getGroupRoleUsers = (req, res) => {
    contex.sequelize.query(`
    SELECT
      ga.user_group_id userGroupId,
	  ug.user_group_name userGroupName,
	  ga.user_id userId, 
	  dp.department_name departmentName,      
	  us.first_name + ' '+ us.last_name adminName,
	  ga.admin_role_id adminRoleId,
	  adr.admin_role_name adminRole
  FROM group_admin ga
   join UserGroups ug  on ga.user_group_id = ug.user_group_id
   join Users us on ga.user_id = us.user_id
   join Departments dp on ug.dept_id = dp.department_id
   join admin_roles adr on adr.admin_role_id = ga.admin_role_id
   where ug.is_active = 1 and ga.admin_role_id = ${req.params.adminRoleId}
    `, { type: QueryTypes.SELECT }).then((result) => {
        res.send(result);
    });
};

exports.getAdminRoles = async (req, res) => {


    contex.sequelize.query(`
    SELECT ar.admin_role_id adminRoleId, ar. admin_role_name adminRoleName, ar.admin_role_description adminRoleDescription, ar.admin_role_type_id adminRoleTypeId, art.admin_role_type_name roleType, count(au.user_id) assignedUsers
    FROM admin_roles ar
    left join admin_role_types art on ar.admin_role_type_id = art.admin_role_type_id
    left join admin_users au on ar.admin_role_id = au.admin_role_id
    where ar.is_active =1
    group by ar.admin_role_id, ar. admin_role_name, ar.admin_role_description,  ar.admin_role_type_id, art.admin_role_type_name
    `, { type: QueryTypes.SELECT }).then((result) => {
        res.send(result);
    });
};

exports.getAdminRolesPermissions = async (req, res) => {

    contex.sequelize.query(`
    WITH Category_Cte (categoryId, categoryName, parentCategory, parentCategoryName)  AS  
    (  
        SELECT ctg.admin_permission_category_id categoryId, ctg.admin_permission_category_name categoryName, 
        CASE WHEN ctg.parent_category_id IS NULL THEN ctg.admin_permission_category_id  ELSE ctg.parent_category_id END prentCategory,
        CASE WHEN pctg.admin_permission_category_name IS NULL THEN ctg.admin_permission_category_name  ELSE pctg.admin_permission_category_name END prentCategoryName	
        FROM admin_permission_category  ctg 
        left join admin_permission_category  pctg on ctg.parent_category_id = pctg.admin_permission_category_id
    )
    select cat.*, 
    ad_pms.admin_permission_id admin_PermissionId, ad_pms.admin_permission_name adminPermissionName, 
    ad_role_pms.is_view isView, ad_role_pms.is_add isAdd, ad_role_pms.is_edit isEdit, ad_role_pms.is_delete idDelete from Category_Cte cat
    join admin_permissions  ad_pms on cat.categoryId = ad_pms.admin_permission_category_id  
    join admin_role_permissions ad_role_pms on ad_pms.admin_permission_id = ad_role_pms.admin_permission_id
    join admin_permission_category_configuration allowd_pms on ad_pms.admin_permission_category_id = allowd_pms.admin_permission_category_id
    where ad_role_pms.admin_role_id = ${req.params.adminRoleId} and allowd_pms.admin_role_type_id = ${req.params.adminRoleTypId}
    `, { type: QueryTypes.SELECT }).then((result) => {
        console.log('res', result);        
        res.send(result);
    });
};

exports.getAdminRoleTypess = async (req, res) => {

    contex.getContext().adminRoleTypes.findAll({
        where: { isActive: { [Op.eq]: true } }
    }).then((result) => {
        res.send(result);
    });
};

exports.addUserRole = async (req, res) => {

    console.log('*********desc *****', req.body.description);
    contex.getContext().accessLevel.create({
        accessLevelName: req.body.accessLevelName,
        description: req.body.description,
        isActive: true,
        canView: req.body.canView,
        canShare: req.body.canShare,
        canApprove: req.body.canApprove,
        canSubscribe: req.body.canSubscribe


    }).then((result) => {
        res.send(result);
    });
};
exports.deleteUserRole = async (req, res) => {
    contex.getContext().accessLevel.update(
        { isActive: false },
        { where: { accessLevelId: req.params.accessLevelId } }
    )
        .then(result => {
            res.send(result);
        }
        )
        .error(err => {
            res.staus(500).send(err);
        }
        )
};

exports.updateUserRole = async (req, res) => {
    console.log('*********desc *****', req.body.description);
    contex.getContext().accessLevel.update(
        req.body,
        { where: { accessLevelId: req.body.accessLevelId } }
    ).then(result => {
        res.send(result);
    }
    )
        .error(err => {
            res.staus(500).send(err);
        }
        )
};