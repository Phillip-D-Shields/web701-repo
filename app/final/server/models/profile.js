const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userRole: {
      type: Boolean,
      required: true,
      default: false
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  },
});

profileSchema.post('save', function(user, next){
  console.log('profileSchema saved')
  next();
})

module.exports = mongoose.model('userProfile', profileSchema);