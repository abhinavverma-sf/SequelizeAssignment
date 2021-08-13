import * as Sequelize from "sequelize";
//import { Sequelize } from 'sequelize';
import { sequelize } from '../database';

const memberTable=sequelize.define('members',{
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        middlename: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        phone: {
            type: Sequelize.STRING(10),
            allowNull: false,

        },
        role: {
            type: Sequelize.INTEGER,
            allowNull: false,

        },
        
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
});

export { memberTable}