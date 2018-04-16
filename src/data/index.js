const events = require('./events');
const partners = require('./partners');
const testimonials = require('./testimonials');
const open_evenings = require('./open-evenings');

module.exports = async (opts) => {
  console.log('\nFetching Codaisseur data...')
  return await Promise.all([
    events(opts),
    partners(opts),
    testimonials(opts),
    open_evenings(opts),
  ])
    .then(_ => console.log('Done fetching Codaisseur data.'))
    .catch(err => {
      console.log('\nError');
      console.log(err);
    });
};
