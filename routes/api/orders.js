const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/api/order');


console.log(router)

router.use(require('../../config/auth'));
// POST /api/orders
router.get('/', orderCtrl.index)
router.post('/', orderCtrl.create)
router.get('/order/:id', orderCtrl.show)
router.put('/order/:id/edit', orderCtrl.update)

module.exports = router;