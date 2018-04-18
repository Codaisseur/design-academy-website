const request = require('superagent');
const crypto = require('crypto');

const API_URL = 'https://codaisseur.com/api';

module.exports = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  return new Promise((resolve, reject) => {
    request
      .get(`${API_URL}/open_evenings`)
      .then(res => {
        console.log('Fetched', res.body.open_evenings.length, 'open_evenings')
        res.body.open_evenings
          .filter(oe => !!oe.design_event_url)
          .forEach(open_evening => {
            createNode(
              Object.assign(
                {},
                open_evening,
                {
                  id: `open_evening-${open_evening.id.toString()}`,
                  event_url: open_evening.design_event_url,
                  parent: null,
                  children: [],
                  internal: {
                    type: `OpenEvening`,
                    contentDigest: crypto
                      .createHash(`md5`)
                      .update(`open_evening-${open_evening.id.toString()}`)
                      .digest(`hex`),
                  }
                }
              )
            );
          });
        resolve();
      })
      .catch(err => {
        console.log('\nError');
        console.log(err);
        reject();
      });
  });
};
