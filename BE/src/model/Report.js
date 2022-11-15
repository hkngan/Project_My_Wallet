module.exports = (sequelize, DataTypes) =>{
   const Report = sequelize.define('Report', {
        UserId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ExpenseDate:{
            type:DataTypes.STRING, 
        },  

        ExpenseItem: {
            type:DataTypes.STRING, 
        },
        
        ExpenseCost: {
            type:DataTypes.STRING, 
        },

    },)
    
        
        return Report

}