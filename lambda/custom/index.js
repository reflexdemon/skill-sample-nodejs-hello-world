/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = require('./handlers/LaunchRequestHandler.handler');
const HelloWorldIntentHandler = require('./handlers/HelloWorldIntentHandler.handler');
const HelpIntentHandler = require('./handlers/HelpIntentHandler.handler');
const CancelAndStopIntentHandler = require('./handlers/CancelAndStopIntentHandler.handler');
const SessionEndedRequestHandler = require('./handlers/SessionEndedRequestHandler.handler');
const ErrorHandler = require('./handlers/ErrorHandler.handler');

// const customHandlers = [
//   './handlers/LaunchRequestHandler.handler',
//   './handlers/HelloWorldIntentHandler.handler',
//   './handlers/HelpIntentHandler.handler',
//   './handlers/CancelAndStopIntentHandler.handler',
//   './handlers/SessionEndedRequestHandler.handler'
// ];

// const customHandlerInstance = customHandlers.map((hdr) => require(hdr));

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  // .addRequestHandlers(...customHandlerInstance)
  .addErrorHandlers(ErrorHandler)
  .lambda();