import app from '../app';

const chai = require('chai');
const chaiHttp = require('chai-http');
// eslint-disable-next-line prefer-destructuring
const expect = chai.expect;
chai.use(chaiHttp);

// Test Sign Up Routes
describe('Signin Functionality', () => {
  const endpoint = '/api/v1/auth/signin';

  const validAcc = {
    email: 'dzabalamacheza@gmail.com',
    password: 'Runfree8418_!*',
  };

  const invalidAcc = {
    email: 'nouser@itdoesntexist.com',
    password: 'thispasswordwontworkeither2019',
  };

  const missingEmail = {
    password: 'thispasswordwontworkeither2019',
  };
  const missingPassword = {
    email: 'nouser@itdoesntexist.com',
  };


  it('Hit the sign in endpoints', (done) => {
    chai.request(app)
      .post(endpoint)
      .send(validAcc)
      .end((err, res) => {
        expect(err).to.be.null;
        done();
      });
  });
  // // Successful Sign Up
  it('it should sign a user in successfully', (done) => {
    chai.request(app)
      .post(endpoint)
      .send(validAcc)
      .end((err, res) => {
        const { body } = res;

        expect(res).to.have.property('status', 200, 'Status returned is not 200');
        expect(body.data).to.be.a('object', 'Data object is not returned');
        expect(body.data).to.have.property('first_name', 'Cheza', 'Data does not return the first name correctly');
        expect(body.data).to.have.property('last_name', 'Dzabala', 'Data does not return the last name correctly');
        expect(body.data).to.have.property('email', 'dzabalamacheza@gmail.com', 'Data does not return the email correctly');
        expect(body.data).to.have.property('password', 'Runfree8418_!*', 'Data does not return the password correctly');
        expect(body.data).to.have.property('token', 'nFx5ch9VBq', 'Data does not return the correct token');

        done();
      });
  });


  // Unsuccessful Sign In
  it('it should reject a signin with invalid credentials', (done) => {
    chai.request(app)
      .post(endpoint)
      .send(invalidAcc)
      .end((err, res) => {
        // console.log(res);
        const { body } = res;
        expect(res).to.have.property('status', 404, 'The response does not have a status code');
        expect(res.status).to.be.equal(404, 'The response status code does not equal 404');
        expect(body).to.have.property('status', 'unsuccessful', 'The body does not return status');
        expect(body).to.have.property('message', 'Invalid Credentials', 'The body does not return a message');
        done();
      });
  });

  it('Should reject login with a missing email', (done) => {
    chai.request(app)
      .post(endpoint)
      .send(missingEmail)
      .end((err, res) => {
        const { body } = res;
        expect(body).to.have.property('status', 'unsuccessful', 'Bad Request status not returned');
        expect(res.status).to.be.equal(400, 'Response status is not equal to 404');
        expect(body).to.be.have.property('message', '"email" is required');
        done();
      });
  });

  it('Should reject login with a missing password', (done) => {
    chai.request(app)
      .post(endpoint)
      .send(missingPassword)
      .end((err, res) => {
        const { body } = res;
        expect(body).to.have.property('status', 'unsuccessful', 'Bad Request status not returned');
        expect(res.status).to.be.equal(400, 'Response status is not equal to 404');
        expect(body).to.be.have.property('message', '"password" is required');
        done();
      });
  });
});
