const express = require('express');
const passport = require('passport');
const localstrategy = require('passport-local');
const flash = require('connect-flash');
const session = require('express-session');

const router = express.Router();

// importing files

const User = require('../models/user.schema');
const product = require('../models/product.schema');

// get product api
// description: get Request
router.get('/product', async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

///////////////////////// Sale /////////////////////////

///////////////////// purchase /////////////////////////////////

///////////////////// email ///////////////////////////

// confirm email page
// Description: Get Request
router.get('/confirm-email', async (req, res) => {
  res.render('confirm-email');
});

// confirm email page
// Description: Post Request
router.post('/confirm-mail', async (req, res) => {
  // const { recoveryemail } = req.body;
  res.redirect('/users/index');
});

// recovery password page
// Description: Get Request
router.get('/recovery-password', async (req, res) => {
  res.render('recovery-password');
});

/////////////////// Error Page //////////////////////

//Error 500 page
// Description: Get Request
router.get('/error-500', (req, res) => {
  res.render('error-500');
});

// Error 404 page
// description: Get request
router.get('/error-404', (req, res) => {
  res.render('error-404');
});

// // Logout route
router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }
    req.session.destroy(err => {
      if (err) return next(err);
      res.clearCookie('connect.sid');
      res.redirect('/users/login');
    });
  });
});

module.exports = router;
