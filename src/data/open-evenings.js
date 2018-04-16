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
        res.body.open_evenings.forEach(open_evening => {
          createNode(
            Object.assign(
              {},
              open_evening,
              {
                id: `open_evening-${open_evening.id.toString()}`,
                parent: null,
                children: [],
                internal: {
                  type: `OpenEvening`,
                  contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(open_evening))
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
