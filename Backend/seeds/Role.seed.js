const Role = require("../models/Role")

const roles = [
 { code:"SALESMAN", name:"Sales Team Member" },
 { code:"MARKETING_MANAGER", name:"Marketing Manager" },
 { code:"CRE", name:"CRE Team" },
 { code:"CRO", name:"CRO Officer" },
 { code:"BRANCH_MANAGER", name:"Branch Manager" }
]

const seedRoles = async () => {

 for(const role of roles){
   const exist = await Role.findOne({code:role.code})

   if(!exist){
     await Role.create(role)
     console.log("Inserted",role.code)
   }
 }

}

module.exports = seedRoles