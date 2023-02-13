import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/bountyHunters', {
  useNewUrlParser: true
});

export default mongoose;
