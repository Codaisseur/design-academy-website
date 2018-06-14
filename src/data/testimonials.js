const request = require('superagent');
const crypto = require('crypto');
const shuffle = require('../lib/shuffle');
const API_URL = 'https://codaisseur.com/api';

module.exports = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  return new Promise((resolve, reject) => {
    request
      .get(`${API_URL}/student_testimonials`)
      .then(res => {
        console.log('Fetched', res.body.student_profiles.length, 'student_testimonials')
        shuffle(res.body.student_profiles).forEach(testimonial => {
          createNode(
            Object.assign(
              {},
              testimonial,
              {
                id: `testimonial-${testimonial.id.toString()}`,
                parent: null,
                children: [],
                internal: {
                  type: `StudentTestimonial`,
                  contentDigest: crypto
                    .createHash(`md5`)
                    .update(`testimonial-${testimonial.id.toString()}`)
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
