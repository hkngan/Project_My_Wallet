module.exports = (sequelize, DataTypes) =>{
    const Todo = sequelize.define('Todo', {
        UserId: {
            type: DataTypes.STRING,
            allowNull: false
        },
         Content: {
             type: DataTypes.STRING,
             allowNull: false
         }
 
     })
         return Todo
 
 }