/**
 * Customer
 */

'use strict';

const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Customer extends Model { }

module.exports.create = ({ connection }) => {

    Customer.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'Customer'
    });

    return Customer;
}