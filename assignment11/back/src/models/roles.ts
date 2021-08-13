import * as Sequelize from "sequelize";
//import { Sequelize } from 'sequelize';
import { sequelize } from '../database';

const rolesTable=sequelize.define('roles',{
        name: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        key: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        
});

export { rolesTable}