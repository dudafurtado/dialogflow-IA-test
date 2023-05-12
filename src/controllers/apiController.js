const { 
  responseWithSuccess, 
  responseWithError 
} = require('../messages/apiResponse');
const { detectIntent } = require('../service/apiService');

const sendMessageToIa = async (req, res) => {
  try {
    const { languageCode, queryText, sessionId } = req.body;

    const responseIa = await detectIntent(languageCode, queryText, sessionId);

    responseWithSuccess(res, responseIa);
  } catch (error) {
    responseWithError(res, error)
  }
}

module.exports = {
  sendMessageToIa
}