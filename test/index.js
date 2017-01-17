const app = require('../server');

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../app');

describe('routes : /xxx', () => {
  it('should (not) GET 100', (done) => {
    chai.request(server)
      .get('/100')
      .end((err, res) => {
        res.status.should.eql(404);
        done();
      })
  });
  it('should GET 200', (done) => {
    chai.request(server)
      .get('/200')
      .end((err, res) => {
        res.status.should.eql(200);
        done();
      })
  });
  it('should GET 300', (done) => {
    chai.request(server)
      .get('/300')
      .end((err, res) => {
        res.status.should.eql(300);
        done();
      })
  });
  it('should GET 400', (done) => {
    chai.request(server)
      .get('/400')
      .end((err, res) => {
        res.status.should.eql(400);
        done();
      })
  });
  it('should GET 500', (done) => {
    chai.request(server)
      .get('/500')
      .end((err, res) => {
        res.status.should.eql(500);
        done();
      })
  });
})
