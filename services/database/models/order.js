/**
 * Order
 */

'use strict';

const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Order extends Model { }

module.exports.create = ({ connection }) => {

    Order.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrementIdentity: true,
            allowNull: true,
            unique: true,
            primaryKey: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'new'
        }
    }, {
        sequelize: connection,
        modelName: 'Order'
    });

    return Order;
}