const StatusAgentModel = require("../models/StatusAgent");

class StatusAgent {
    // add status [GET] /statusagent/getAllStatus
    getAllStatus(req, res, next) {
        StatusAgentModel.find({})
            .then((status) => res.json(status))
            .catch((err) => res.json(err));
    }
}

module.exports = new StatusAgent();
