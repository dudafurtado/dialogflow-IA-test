const { 
  responseWithSuccess, 
  responseWithError 
} = require('../messages/apiResponse');
const { detectIntent } = require('../service/apiService');

const sendMessageToIa = async (req, res) => {
  try {
    const { languageCode, queryText, sessionId } = req.body;

    const responseData = await detectIntent(languageCode, queryText, sessionId);

    responseWithSuccess(res, responseData.response);
  } catch (error) {
    responseWithError(res, error)
  }
}

module.exports = {
  sendMessageToIa
}