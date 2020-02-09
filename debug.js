/**
 * Debug mode
 */

'use strict';

const path = require('path');
const pkg = require('./package.json');

var _ = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

require(path.join(__dirname, pkg.main));