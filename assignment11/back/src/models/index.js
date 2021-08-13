

const Sequelize=require('sequelize');
let sequelize=require('../database');
const DataTypes=require('sequelize');
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.customerTable=require('./customers');
db.rolesTable=require('./roles');
db.memberTable=require('./members');


export { db};