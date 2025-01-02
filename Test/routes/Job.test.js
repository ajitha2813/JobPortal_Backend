const request = require('supertest');
const express = require('express');
const chai = require('chai');
const sinon = require('sinon');
const Job = require('../../Models/Job.Model'); // Adjust the path to your Job model
const jobRoutes = require('../../Routes/Job.route'); // Adjust the path to your job routes
const { expect } = chai; // Destructure expect from chai

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use('/api', jobRoutes); // Use the job routes with '/api' prefix

describe('GET /api/job/getAll', () => {
  let stub;

  beforeEach(() => {
    // Before each test, stub the Job.find method
    stub = sinon.stub(Job, 'find');
  });

  afterEach(() => {
    // After each test, restore the original Job.find method
    stub.restore();
  });

  it('should fetch all jobs successfully', async () => {
    // Mock the response of Job.find to return a list of jobs
    const mockJobs = [
      { title: 'Software Engineer', salary: '1000' },
      { title: 'Data Scientist', salary: '1200' },
    ];

    // Stub the Job.find method to return mockJobs
    stub.resolves(mockJobs);

    // Make a GET request to /api/job/getAll (since '/api' is added in server.js)
    const res = await request(app).get('/api/job/getAll');

    // Assertions
    expect(res.status).to.equal(200); // Status should be 200 OK
    expect(res.body).to.be.an('array'); // Response should be an array
    expect(res.body).to.have.lengthOf(2); // Should return 2 jobs
    expect(res.body[0].title).to.equal('Software Engineer'); // First job title should be correct
    expect(res.body[1].title).to.equal('Data Scientist'); // Second job title should be correct
  });

  it('should return 500 if there is a server error', async () => {
    // Simulate an error by making Job.find throw an error
    stub.rejects(new Error('Database error'));

    // Make a GET request to /api/job/getAll
    const res = await request(app).get('/api/job/getAll');

    // Assertions
    expect(res.status).to.equal(500); // Status should be 500 Internal Server Error
    expect(res.body).to.have.property('message').equal('Server error'); // Error message should be correct
  });
});
