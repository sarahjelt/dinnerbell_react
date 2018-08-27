module.exports = {
  'secret':'nodeauthsecret',
  'database': process.env.MONGODB_URI || "mongodb://localhost/dinnerbell_react"
};
