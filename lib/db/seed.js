import Bounty from '../models/Bounty.js'
import bounties from './bounties.json' assert { type: 'json' }

Bounty.deleteMany({}).then(() => {
  Bounty.create(bounties).then(bounties => {
    console.log(bounties);
    process.exit();
  });
});
