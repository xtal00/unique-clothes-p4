const Cloth = require('../models/Cloth')

module.exports = {
  index,
  create,
  show,
  delete: deleteCloth,
  update : updateCloth
}

function index(req, res){
  Cloth.find({}, function(err, clothes){
    if(err){
      res.status(500).json(err)
    }
    res.json(clothes).status(200)
  })
}

function create(req, res){
  Cloth.create({
    color: req.body.color,
    category:req.body.category,
    farbic: req.body.farbic,
    price: req.body.price,
    date: req.body.date,
    user: req.user._id
  }, function(err, cloth){
    res.status(200).json('ok')
  })
}

function show(req, res){
  Cloth.findById(req.params.id, function(err, cloth){
    res.json(cloth).status(200)
  })
}

function deleteCloth(req, res){
  Cloth.findByIdAndRemove(req.params.id).exec()
  res.json('deleteCloth')
}

function updateCloth(req, res){
  Cloth.findByIdAndUpdate(req.params.id, req.body).exec()
  res.json('updateCloth')
}