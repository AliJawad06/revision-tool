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
  sectionSchema.updateOne({_id:req.body._id}, req.body.update ,(error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data + " This is data");
      res.json(data);
      
    }
  })
})

module.exports = router;