const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('homepage');
});

router.get('/homepage', withAuth, async (req, res) => {
    try {
        res.render('homepage');
    }
    catch (err) {
        res.status
    }
    
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

router.get('/login', (req, res) => {
  res.render('login');
})

module.exports = router;
