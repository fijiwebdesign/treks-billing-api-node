/**
 * TreksBillingAPILib
 *
 * This file was automatically generated for Treks by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.AccountController;
describe("AccountController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Profile and Payment Profile of logged in user
     */
    it("should testAccountDetail response", function testAccountDetailTest(done) {
        controller.getAccountDetail(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

    /**
     * TODO: Add Description
     */
    it("should testAccountSubscriptions response", function testAccountSubscriptionsTest(done) {
        controller.getAccountSubscriptions(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });
});
