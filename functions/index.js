const { onTeamCreate } = require("./onTeamCreate");
const { onUserCreate } = require("./onUserCreate");
const { onHotmartWebhook } = require("./onHotmartWebhook");

module.exports = {
  onTeamCreate,
  onUserCreate,
  onHotmartWebhook,
};
