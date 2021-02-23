"use strict";
import data from "./data.json";

module.exports.hello = async (event) => {
  const abc = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hii from serverless !",
        data: data,
      },
      null,
      2
    ),
  };
  return abc;
};
