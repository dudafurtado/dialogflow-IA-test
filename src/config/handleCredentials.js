require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const PROJECID = CREDENTIALS.project_id;

const CONFIGURATION = {
    credentials: {
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email']
    }
}

module.exports = {
  PROJECID,
  CONFIGURATION
}