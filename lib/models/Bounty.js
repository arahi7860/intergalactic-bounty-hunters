import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  name: String,
  wantedFor: String,
  reward: {
    type: Number,
    min: 0,
  },
  client: String,
  ship: String,
  hunters: [String],
  captured: Boolean,
});

const Bounty = mongoose.model("Bounty", bountySchema);

export default Bounty;
