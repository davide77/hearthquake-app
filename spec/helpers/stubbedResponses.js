import { quakes } from './stubbedData';

const stubbedResponses = {
  empty: new Promise((resolve) => {
    resolve({
      json: () => new Promise(resolve => {
        resolve();
      }) 
    });
  }),
  success: new Promise((resolve) => {
    resolve({
      json: () => new Promise(resolve => {
        resolve(quakes);
      }) 
    });
  }),
  failure: new Promise((resolve, reject) => {
    reject('{ERROR_RESPONSE}');
  }),
};

export default stubbedResponses;