import Bounty from "./lib/models/Bounty.js";
import mongoose from "./lib/db/connection.js";
import bountyData from "./lib/db/bounties.json" assert { type: "json" };

/*
 * Instructions:
 *
 * For each prompt below, write a query that completes the task described in
 * the prompt.
 *
 * Tip: comment out your answers before moving on to the next prompt.
 *
 */

// Create a new Bounty with the following values:
// - name: Han Solo,
// - wanted for:  Owing Money
// - client: Jabba the Hut
// - reward: 10000000
// - ship: Millennium Falcon
// - hunters: Bobba Fett, Dengar, IG-88, Zuckus, Greedo, Bossk, 4-Lom
// - captured: false

const test = new Bounty({
  name: "Han Solo",
  wantedFor: "Owing Money",
  reward: 10000000,
  client: "Jabba the Hut",
  ship: "Millenium Falcon",
  hunters: [
    "Bobba Fett",
    "Dengar",
    "IG-88",
    "Zuckus",
    "Greedo",
    "Bossk",
    "4-Lom",
  ],
  captured: false,
});

await Bounty.deleteMany({});
await Bounty.insertMany(bountyData);

await test.save();

// Find all bounties in the database
const bounties = await Bounty.find({});
// console.log(bounties);

// Find all bounties where the client is 'Time Bureau'
const time = await Bounty.find({ client: "Time Bureau" });
// console.log(time);

// Find all bounties that have been captured
const capture = await Bounty.find({ captured: true });
// console.log(capture);

// Find all bounties with a reward greater than 100,000
const bigBounty = await Bounty.find({ reward: { $gt: 100000 } });
// console.log(bigBounty);

// Starbuck and the Captain have come to an understanding. Remove her record.
const remove = await Bounty.findOneAndDelete({ name: "Starbuck" });
// console.log(remove);

// Update Sara Lance's name to be her super hero alias, 'White Canary'
const newName = await Bounty.updateOne(
  { name: "Sara Lance" },
  { name: "White Canary" }
);
// console.log(newName);
const whiteCanary = await Bounty.find({ name: "White Canary" });
// console.log(whiteCanary);

// Update Rocket's ship to be 'The Milano 2'
const newShip = await Bounty.updateOne(
  { ship: "The Milano" },
  { ship: "The Milano 2" }
);
const rocketShip = await Bounty.find({ name: "Rocket" });
console.log(rocketShip);
