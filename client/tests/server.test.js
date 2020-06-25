import axios from 'axios';

describe('API GET Request for Reviews', () => {
  it('should receive a 200 response from GET request for reviews', () => {
    return axios('http://localhost:3000/biz/1/reviews')
      .then(result => {
        expect(result.status).toBe(200);
        expect(result.data.length).toBe(14);
      });
  });
});

describe('API GET Request for Photos', () => {
  it('should receive a 200 response from GET request for photos', () => {
    return axios('http://localhost:3000/biz/1/reviews/340/photos')
      .then(result => {
        expect(result.status).toBe(200);
        expect(result.data.length).toBe(4);
      });
  });
});