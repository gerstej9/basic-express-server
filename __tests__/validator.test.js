'use strict';

const supertest = require ('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('testing server for 500 on no name input', () =>{
  it ('should send a 500 status no name provided', async () => {
    const response = await request.get('/person?');
    expect(response.status).toEqual(500);
  })
})