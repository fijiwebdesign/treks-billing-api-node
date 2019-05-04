/**
  * @module TreksBillingAPILib
  *
  * API for Treks Billing Service
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const Logger = require('./Logger');
const AccountController = require('./Controllers/AccountController');
const AccountsController = require('./Controllers/AccountsController');
const SubscriptionController = require('./Controllers/SubscriptionController');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of TreksBillingAPILib
    Configuration,
    Environments,
    Logger,
    // controllers of TreksBillingAPILib
    AccountController,
    AccountsController,
    SubscriptionController,
    // models of TreksBillingAPILib
    // exceptions of TreksBillingAPILib
    APIException,
};

module.exports = initializer;
