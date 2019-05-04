/**
 * TreksBillingAPILib
 *
 * This file was automatically generated for Treks by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const logger = require('../Logger');

class BaseController {
     /**
     * Helper function to print error logging messages
     * @param    {number}    code        The error code which needs to be logged
     * @param    {string}    endpName    The name of endpoint making the call
     */
    static printErrorLog(code, endpName) {
        logger.error(`'Status code: ${code} received for ${endpName}.`);
    }

    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @param   {string}        endpName   Name of the endpoint called
     * @callback    Callback function which returns error, response, context
     */
    static validateResponse(_context, endpName) {
        const errorObj = {
            errorMessage: '',
            errorCode: '',
            errorResponse: _context.response.body,
        };
        const returnObj = {
            error: errorObj,
            response: null,
            context: _context,
        };

        BaseController.printErrorLog(_context.response.statusCode, endpName);

        returnObj.error.errorMessage = 'HTTP Response Not OK';
        returnObj.error.errorCode = _context.response.statusCode;

        return returnObj;
    }
}

module.exports = BaseController;
