/**
 * TreksBillingAPILib
 *
 * This file was automatically generated for Treks by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';


const classMap = {
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
