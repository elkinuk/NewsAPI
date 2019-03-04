const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const Users = require('./../../../modules/users/controlles.js').facade;

passport.use(new BasicStrategy( 
    (username, password, done) => {
        Users.findOne({ username: username }).exec((err, user) => {
          if (err) return done(err); 
          if (!user || user.password !== password){
            const err = new Error('Please login! You are Unauthorized');
            err.status = 401;
            return done(err);
          }
          return done(null, true);
        });
      }
));
