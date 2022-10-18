const express = require('express');
const router = express.Router();
const clothCtrl = require('../../controllers/api/clothes');

// POST /api/clothes
router.get('/', clothCtrl.index)
router.post('/', clothCtrl.create)
router.get('/item/:id', clothCtrl.show)
router.delete('/item/:id', clothCtrl.delete)
router.put('/item/:id/edit', clothCtrl.update)

module.exports = router;