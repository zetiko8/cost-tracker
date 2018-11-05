const config = require('..//../config')
const expect = require('chai').expect
const assert = require('assert')
function done(){}

var db = require(config.db + '/day.js')

describe("Database operations for Days", function(){
    it("Get item", function(done){

        let itemId = 1 // id  
        
        db.get(itemId, function(err, item){
            if(err){
                expect.fail(err)             
            } else {
                
                expect(item).to.not.equal(null)
    
                done()
            }
        })

    })
    it("Add item", function(done){
        
        var sampleItem = {
            id : 4,
        }

        db.add(sampleItem, function(err){
            if(err){
                expect.fail(err)             
            } else {
                
                db.get(sampleItem.id, function(err, item){
                    if(err){
                        expect.fail(err)             
                    } else {
                        
                        expect(item).to.not.equal(null)
            
                        done()
                    }
                })

            }
        })

    })
    it("Delete item", function(done){
        
        var sampleItem = {
            id : 4,
        }

        db.delete(sampleItem.id, function(err){
            if(err){
                expect.fail(err)             
            } else {
                
                db.get(sampleItem.id, function(err, item){
                    if(err){
                        done()
                    } else {
                        expect.fail('Item not deleted') 
                    }
                })

            }
        })

    })
})