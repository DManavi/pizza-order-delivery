/**
 * Order item
 */

'use strict';

const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class OrderItem extends Model { }

module.exports.create = ({ connection }) => {
    
    OrderItem.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        qty: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        size: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize: connection,
        modelName: 'OrderItem'
    });

    return OrderItem;
}