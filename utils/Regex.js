const URLRegex = /^https?:\/\/(www\.)?[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+\.[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]+#?/;
const EmailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+){1,}\.([a-zA-Z]+)$/;

module.exports = {
  URLRegex,
  EmailRegex,
};
