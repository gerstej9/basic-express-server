const supertest = require ('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('testing server for 404 on bad route', () =>{
  it ('should send a 404 status route does not exist', async () => {
    const response = await request.get('/scooby');
    expect(response.status).toEqual(404);
  })
})

describe('testing server for 404 on bad method', () =>{
  it ('should send a 404 status request method is invalid', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
  })
})


describe('testing server for 200 on name provided succesfully', () =>{
  it ('should send a 200 status if request works', async () => {
    const response = await request.get('/person?name=James');
    expect(response.status).toEqual(200);
  })
})


describe('testing server for json object return', () =>{
  it ('should json object with name if correctly used', async () => {
    const response = await request.get('/person?name=James');
    expect(response.body.name).toEqual('James');
  })
})

