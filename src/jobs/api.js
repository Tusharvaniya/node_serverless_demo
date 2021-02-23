const mydata = require("../../data.json");

// below api is a demo to get all data from data.json file
module.exports.getAll = async (event) => {
  let res = {
    statusCode: 200,
    body: JSON.stringify({ msg: "success", mydata }),
  };

  return res;
};

// below api is a demo to get specific data from data.json file
module.exports.onlyOne = async (event) => {
  let data = null;

  for (let i = 0; i < mydata.length; i++) {
    if (event.pathParameters.id == mydata[i].id) {
      data = mydata[i];
      break;
    }
  }
  let msg = "No data found";
  let statusCode = 404;
  if (data) {
    msg = "success";
    statusCode = 200;
  }

  let res = {
    statusCode,
    body: JSON.stringify({ msg, data }),
  };

  return res;
};
