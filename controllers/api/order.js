const Order = require('../../models/Order')

module.exports = {
  index,
  create,
  show,
  delete: deleteOrder,
  update : updateOrder
}

function index(req, res){
  Order.find({}, function(err, orders){
    if(err){
      res.status(500).json(err)
    }
    res.json(orders).status(200)
  })
}

function create(req, res){
  Order.create({
    color: req.body.color,
    category:req.body.category,
    farbic: req.body.farbic,
    price: req.body.price,
    date: req.body.date,
    user: req.user._id
  }, function(err, order){
    res.status(200).json('ok')
  })
}

function show(req, res){
  Order.findById(req.params.id, function(err, order){
    res.json(order).status(200)
  })
}

function deleteOrder(req, res){
  Order.findByIdAndRemove(req.params.id).exec()
  res.json('deleteOrder')
}

function updateOrder(req, res){
  Order.findByIdAndUpdate(req.params.id, req.body).exec()
  res.json('updateOrder')
}