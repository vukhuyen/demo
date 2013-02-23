var should = require('should');

var coworkingspot = {
    name: 'CapitalFactory'
  , companies: ['co1', 'co2', 'co3', 'co4']
};

coworkingspot.should.have.property('name', 'CapitalFactory');
coworkingspot.should.have.property('companies').with.lengthOf(4);

var a;
should.exist(a);