var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

// create collection

let lopSchema = mongoose.Schema({
  Phone: {
    type: String,
  },
  Password: {
    type: String,
  },
  TypeRegister: {
    type: String,
  },
  Fullname: {
    type: String,
  },
  TypeUser: {
    type: String,
  },
  IdProvince: {
    type: String, 
  }
});

let Lop = mongoose.model('Lop', lopSchema); 

router.get('/', function(req, res, next) {
  Lop.find({}, (Error, data)=>{
  res.render('index',{lops:data});
  });
});


// form add
router.get('/form-add', function (reg, res, next){
  res.render('form-add',{});
});

router.post('/add',function(req, res, next){
  Lop.create(req.body);
  res.redirect('/');
});

router.get('/form-update/:id',function(req, res, next){
  Lop.findById(req.params.id,(Error,data)=>{
    res.render('form-update',{lops:data});
  });
});

router.post('/update',function(req, res, next){
  Lop.findByIdAndUpdate(req.body.id,req.body, (Error, data)=>{
    res.redirect('/');
  });
})

router.get('/form-delete/:id',function(req, res, next){
  Lop.findByIdAndDelete(req.params.id,(Error,data)=>{
    res.redirect('/');
  });
});

module.exports = router;
