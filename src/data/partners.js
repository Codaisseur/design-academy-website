const request = require('superagent');
const crypto = require('crypto');

const API_URL = 'https://codaisseur.com/api';

module.exports = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  return new Promise((resolve, reject) => {
    request
      .get(`${API_URL}/partners`)
      .then(res => {
        console.log('Fetched', res.body.partners.length, 'partners')
        res.body.partners.forEach(partner => {
          createNode(
            Object.assign(
              {},
              partner,
              {
                id: `partner-${partner.id.toString()}`,
                parent: null,
                children: [],
                internal: {
                  type: `Partner`,
                  contentDigest: crypto
                    .createHash(`md5`)
                    .update(`partner-${partner.id.toString()}`)
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
