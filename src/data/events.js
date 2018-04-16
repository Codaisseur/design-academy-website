const request = require('superagent');
const crypto = require('crypto');

const API_URL = 'https://codaisseur.com/api';

module.exports = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  return new Promise((resolve, reject) => {
    request
      .get(`${API_URL}/events`)
      .then(res => {
        console.log('Fetched', res.body.events.length, 'events')
        res.body.events.forEach(event => {
          createNode(
            Object.assign(
              {},
              event,
              {
                id: event.id.toString(),
                parent: null,
                children: [],
                internal: {
                  type: `Event`,
                  contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(event))
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
