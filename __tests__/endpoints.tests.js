// import app and endpoints
const { app } = require('../app.js');
const { books } = require('../data.js');
// import test version of superagent
const supertest = require('supertest');

// make request function for testing
const request = supertest(app);

it('it should respond all books',
    // eslint-disable-next-line space-before-function-paren
    async (done) => {
        const expectation = {
            results: books
        };
        // client talking to server (hitting the endpoint, getting response)
        const response = await request.get('/books');
        // expected status
        expect(response.status).toBe(200);
        // expected correct response
        expect(response.body).toEqual(expectation);
        // clean up function
        done();
    });

it('it should respond selected book',
    // eslint-disable-next-line space-before-function-paren
    async (done) => {
        const expectation = {
            results: {
                id: '1',
                title: 'We Begin At The End',
                image: 'book1.png',
                author: 'Chris Whitaker',
                category: 'Fiction',
                price: 20,
                hardcover: true,
                shipping: 'yes',
            }
        };
        // client talking to server (hitting the endpoint, getting response)
        const response = await request.get('/books/1');
        // expected status
        expect(response.status).toBe(200);
        // expected correct response
        expect(response.body).toEqual(expectation);
        // clean up function
        done();
    });