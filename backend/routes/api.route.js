const { json } = require('body-parser');
let mongoose = require('mongoose');
  express = require('express'),
  router = express.Router()
let sectionSchema = require('../models/Section');

  router.route('/create-section').post((req, res, next) => {
    console.log(req);
    sectionSchema.create({},req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
        
      }
    })
})


router.route('/get-sections').get((req,res) =>{
  sectionSchema.find()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => console.log(err))


});

router.route('/get-count').get((req,res) =>{
  console.log(JSON.stringify(req.query.colID) + " \n this is req.body");
  sectionSchema.count({colID: req.query.colID})
  .then((data) => {

    res.json(data);
  }) 
  .catch((err) => console.log(err))


});
 
router.route('/set-section').put((req, res, next) => {
  console.log('you have reached here');
  console.log(req.body);
  var obj = {}
  console.log(req.body.move + " this is move");
  obj = (req.body.move ? 
  [{
    updateOne: {
      filter: {_id:req.body._id},
      update: req.body.update
    }
  },
  {
    updateMany: {
      filter: {$and:[{colID:req.body.ogcolID},{id:{$gt:req.body.ogid}}]},
      update: { $inc: {id: -1}},
    }
  }] : [{
    updateMany: { 
      filter: {$and: [{colID:req.body.update.colID}, {id: { $lt: req.body.ogid }}]}, 
      update: {$inc: {id:1}},
    }
  },{
    updateOne: {
      filter: {_id: req.body._id},
      update: req.body.update

    }
  }
  ]);

  console.log(JSON.stringify(obj) + " this is obj");
 


  sectionSchema.bulkWrite(obj,{ordered:true})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() =>{
    sectionSchema.find()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => console.log(err));
  });  
  

})

module.exports = router; 