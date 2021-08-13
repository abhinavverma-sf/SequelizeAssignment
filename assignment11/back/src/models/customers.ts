import * as Sequelize from "sequelize";
//import { Sequelize } from 'sequelize';
import { sequelize } from '../database';
import { memberTable } from "./members";

const customerTable=sequelize.define('customers',{
        name: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        website: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cust_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
});

memberTable.belongsTo(customerTable,{constraints: false, foreignKey:'id', targetKey: 'cust_id'});

export { customerTable}