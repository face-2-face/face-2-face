const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  match: function() {
    return this.hasMany('Matches');
  }
});

module.exports = db.model('Profile', Profile);
