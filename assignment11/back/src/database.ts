import { Sequelize } from 'sequelize-typescript';

export const sequelize= new Sequelize('demo1','postgres','Laser12', {
    host: 'localhost',
    dialect: 'postgres',
    
    models: ['assignment10/back/src/models']
    
    
});


