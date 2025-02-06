var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

/* GET home page. */

router.post('/',user.insert);
router.get('/get',user.getdata);
router.get('/update/:id',user.get_update_data);
router.post('/update/:id',user.update_data);
router.get('/delete/:id',user.delete_data);
router.post('/login',user.login);


module.exports = router;
