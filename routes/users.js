var express = require('express');
const User = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.post('/new/:name', async function(req, res) {
  const exists = await User.findOne({name : req.params.name})
  if (!exists) {
  await new User({
    name:req.params.name, 
    score:0,
    actions:{
      pompesScore: 0,
      abdosScore: 0,
      tractionsScore: 0,
      squatsScore: 0,
      cardioScore: 0,
      haltèresScore: 0
    }
  }).save()
  return res.json({result:true})
  }
  return res.json({result:false})
});

router.get('/login/:name', async function(req,res) {
  const exists = await User.findOne({name : req.params.name})
  exists ? res.json({result : true}) : res.json({result : false})
})

router.get('/all',async function(req,res) {
  const warriors = await User.find()
  res.json({result:true, warriors})
})

router.post('/score/:name', async function(req,res) {
  const { score, actions } = req.body;
  const previousData = await User.findOne({name : req.params.name})
  const newScore = previousData.score + score
  const newActions = {...previousData.actions}

  for (let key in actions) {
    if (newActions[key]) {
      newActions[key] += actions[key]
    } else {
      newActions[key] = actions[key]
    }
  }
  await User.updateOne(
    { name: req.params.name },
    { 
      $set: { 
        score: newScore, 
        actions: newActions 
      } 
    }
  );
  res.json({ result: true });
})

module.exports = router;
