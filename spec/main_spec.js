"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("beersong test", function(){
    sinon.spy(console, 'log');

    it("i=0", function(){

        var result = main(0);
        var expect_string = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        
        expect(result).to.equal(expect_string);
    });
    
    it('i=1',function(){
        let result = main(1);
        var expect_string = `1 bottles of beer on the wall, 1 bottles of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        
        expect(result).to.equal(expect_string);
    })
});