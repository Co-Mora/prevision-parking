const API = require('../services/API')

const fetchAllResult = (URL) => {
  return API().get(`${URL}`);
};

const findSearchResult = (URL, value) => {
  return API().get(`${URL}/${value}`)
}
module.exports = {
    fetchAllResult,
    findSearchResult
}
