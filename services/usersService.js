var contex = require("./sequalize.service");
const { Op } = require("sequelize");


exports.getUsers = async () => {
   
    // join  report 
    let users = await contex.getContext().Users.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("items users", users);
    return users;
};

exports.addUser = async (email, userinfo) => {
  let newUser =   contex.getContext().Users.build({
        FirstName: userinfo.givenName,
        LastName: userinfo.surname,
        Email: userinfo.email,
        UserName: userinfo.userPrincipalName,
        DepartmentId: 1,
        CoWorkerId: 1,
        Designation: userinfo.jobTitle,
        ReportingManagerId: 1,
        IsActive: true
    })
    let res = await newUser.save();
    // await contex.getContext().Users.create({ });
    // join  report     
    if(res){
        return { staus: "user created successfully", userId: res.UserId };
    } else {
        return { staus: "failed in user creation", };
    }
    // console.log("items users", users);
    // return users;
};