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

const controller = testerlib.SubscriptionController;
describe("SubscriptionController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * TODO: Add Description
     */
    it("should testSubscriptionList response", function testSubscriptionListTest(done) {
        controller.getSubscriptionList(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});
