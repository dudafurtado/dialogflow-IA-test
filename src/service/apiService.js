const dialogflow = require('@google-cloud/dialogflow');
const { CONFIGURATION, PROJECID } = require('../config/handleCredentials')

const detectIntent = async (languageCode, queryText, sessionId) => {
  const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);
  const sessionPath = sessionClient.projectAgentSessionPath(PROJECID, sessionId);

  let request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: queryText,
        languageCode: languageCode,
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  const fieldParams = result.parameters.fields

  return {
    textRequest: result.queryText,
    intent: result.intent.displayName,
    projectIntent: result.intent.name,
    parameters: {
      format: fieldParams.format.listValue.values || null,
      type_pull_request: fieldParams.type_pull_request.listValue.values || null,
      time: fieldParams.time || null,
      user: fieldParams.user || null,
      date_time: fieldParams['date-time'].structValue.fields || null,
      intention: fieldParams.intention || null,
    }
  };
}

module.exports = {
  detectIntent,
}