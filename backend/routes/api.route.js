let mongoose = require('mongoose');
  express = require('express'),
  router = express.Router()
let sectionSchema = require('../models/Section');

  router.route('/create-section').post((req, res, next) => {
    console.log('req.body');
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

router.route('/set-sections').post((req, res, next) => {
  console.log('you have reached here');
  sectionSchema.updateMany(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
      
    }
  })
})

module.exports = router;