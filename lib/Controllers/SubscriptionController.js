/**
 * TreksBillingAPILib
 *
 * This file was automatically generated for Treks by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('../Logger');

class SubscriptionController {
    /**
     * TODO: Add Description
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscriptionList(callback) {
        _logger.info('getSubscriptionList being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getSubscriptionList');
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/subscription/list';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getSubscriptionList');
        const _headers = {
            Authorization: `Bearer ${_configuration.oAuthAccessToken}`,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        _logger.debug(`'Raw request for getSubscriptionList  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getSubscriptionList...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getSubscriptionList');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else {
                    _logger.info('Validating response for getSubscriptionList ');
                    errorResponse = _baseController.validateResponse(_context, 'getSubscriptionList');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * TODO: Add Description
     *
     * @param {string} subscriptionId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscriptionDetail(subscriptionId, callback) {
        _logger.info('getSubscriptionDetail being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getSubscriptionDetail');
        const _baseUri = _configuration.getBaseUri();

        let _pathUrl = '/subscription/detail/{subscriptionId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            subscriptionId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getSubscriptionDetail');
        const _headers = {
            Authorization: `Bearer ${_configuration.oAuthAccessToken}`,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        _logger.debug(`'Raw request for getSubscriptionDetail  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getSubscriptionDetail...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getSubscriptionDetail');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, null, _context);
                    _fulfill();
                } else {
                    _logger.info('Validating response for getSubscriptionDetail ');
                    errorResponse = _baseController.validateResponse(_context, 'getSubscriptionDetail');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = SubscriptionController;
