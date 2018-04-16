const events = require('./events');
const partners = require('./partners');

module.exports = async (opts) => {
  console.log('\nFetching Codaisseur data...')
  return await Promise.all([events(opts), partners(opts)])
    .then(_ => console.log('Done fetching Codaisseur data.'))
    .catch(err => {
      console.log('\nError');
      console.log(err);
    });
};
