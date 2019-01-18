/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const fs = require('fs');
const path = require("path");

const ErrorHandler = require('./error/ErrorHandler.handler');
const handlers = './handlers';
let customHandlerInstance =  fs.readdirSync(handlers)
        .map((item) => handlers + '/' + item)
        .map((item => require(item)));

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(...customHandlerInstance)
  .addErrorHandlers(ErrorHandler)
  .lambda();