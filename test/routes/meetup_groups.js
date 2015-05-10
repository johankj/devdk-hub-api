var request = require('supertest')
  , express = require('express')
  , config = require('../../config.js')
  , app = require('../../app.js')
  , assert = require("assert")
  , test_helper = require('../test_helper.js');
 	
describe('Meetup Groups', function(){
  beforeEach(function(done){
  	test_helper.setupDatabase(done);
  });
  describe('GET', function(){
    
  	it('It should be okay', function(next) {
  		request(app)
  			.get('/meetup_groups')
  			.expect(200)
  			.end(function(err, res){
  				if (err) {
  					next(err);
  					return;
  				}
  				next();
  			});
	  });
     
  	it('It should return json', function(next) {
  		request(app)
  			.get('/meetup_groups')
  			.expect(200)
        .expect('Content-Type', /json/)
  			.end(function(err, res){
  				if (err) {
  					next(err);
  					return;
  				}

  				next();
  			});
	   });
  });
});
