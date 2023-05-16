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

  return {
    result
  };
}

module.exports = {
  detectIntent,
}