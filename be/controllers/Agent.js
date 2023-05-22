const AgentModel = require("../models/Agent");
const RingGroupModel = require("../models/RingGroup");
const KeyWordModel = require("../models/KeyWord");

class Agent {
  getAllAgent(req, res, next) {
    AgentModel.find()
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  addAgent(req, res, next) {
    const agent = req.body;
    const newAgent = new AgentModel(agent);
    newAgent.save();
    res.json(agent);
  }

  getAllRingGroup(req, res, next) {
    RingGroupModel.find()
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  getAllPhoneNumbers(req, res, next) {
    AgentModel.distinct("phone")
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  getAllWaitime(req, res, next) {
    AgentModel.find({}, { waitTime: 1, month: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getAllStatusTime(req, res, next) {
    AgentModel.find({}, { statusTime: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getAllStatus(req, res, next) {
    AgentModel.find({}, { status: 1, month: 1, statusTime: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getAllPhoneNumbersAndMonth(req, res, next) {
    AgentModel.find({}, { phone: 1, month: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getKeyAndQuantityInCalls(req, res, next) {
    AgentModel.find()
      .then(
        (call) => {
          let ringGroup = [];
          call.forEach(
            (element) => {
              ringGroup.push(element.ringGroup);
            }
            // statistics ringGroup from call
          );
          const count = {};
          for (const el of ringGroup) {
            for (const ele of el.split(",")) {
              count[ele] = (count[ele] || 0) + 1;
            }
          }
          res.json(count);
        }
        // Return an array like: [ { key: 'ringGroup1', quantity: 2 }, { key: 'ringGroup2', quantity: 1 } ]
      )
      .catch((err) => res.json(err));
  }

  keywordstatistics(req, res, next) {
    const handleCount = (string, arrKeyword) => {
      string = string.toLowerCase();
      var wordCounts = {};
      for (var i = 0; i < arrKeyword.length; i++) {
        var word = arrKeyword[i];
        wordCounts[word] = 0;
      }
      var result = [];
      for (var i = 0; i < arrKeyword.length; i++) {
        var count = 0;
        var position = string.indexOf(arrKeyword[i].toLowerCase());
        while (position !== -1) {
          count++;
          position = string.indexOf(arrKeyword[i].toLowerCase(), position + 1);
        }
        result.push({
          key: arrKeyword[i],
          quantity: count,
        });
      }
      return result.filter((item) => item.quantity > 0);
    };

    Promise.all([
      AgentModel.find({}, { content: 1, name: 1 }),
      KeyWordModel.find({}, { name: 1 }),
    ]).then(([agent, keyword]) => {
      let arrKeyword = [];
      keyword.forEach((element) => {
        arrKeyword.push(element.name);
      });
      let arrAgent = [];
      agent.forEach((element) => {
        arrAgent.push({
          content: element.content,
          name: element.name,
          count: handleCount(element.content, arrKeyword),
        });
      });
      res.json(arrAgent);
    });
  }

}
module.exports = new Agent();
