
# LeagueOfDrafts

A game about drafting in League of Legends. The goal is to guess the winner of a match based on the draft.

Planning to use Riot API to select a random game.

## how to run locally

at src

```zsh
node proxy.js
```

```zsh
npn dev
```

## TODO

- [ ] Add user system
  - [ ] React Router
  - [ ] Add login
  - [ ] Add register
- [ ] Add database
- [ ] Persistent API key
- [ ] Options for match selection
  - [ ] Select rank
  - [ ] Select region
  - [ ] Select patch
  - [ ] Select queue
- [ ] Add more details to match (eg. bans, pickorder..)
- [ ] Add more stats to user
- [ ] Add more stats to match

## Steps needed

* 1: API key needed to use Riot API - atm daily updates are needed at <https://developer.riotgames.com/>
* 2: Get "random" matches associated with given rank
* 3: Know the winner of each match, but don't show that to user
* 3b: Show more details of match (eg. bans, pickorder..)
* 4: Determine if user guess is correct/wrong
* 5: Show user stats about guesses
* 6: Store user stats in database (user system + db needed for this step)

## Plan

### u/bongdong420 - reddit idea

> The best way I see to collect matches is to get a list of summonerIDs from each tier/divison using league-v4 then getting their accountIDs using summoner-v4 then getting their match history using match-v4 then using games from their match history.

### Riot API suggestion

Match Data
The best way to collect a large set of matches is not straightforward. Typically you need code that does this:

Collect a few summoners by hand. Just your own summoner is likely enough, or you could use all challenger players.
Get the account IDs of those summoners.
Get their match history on the queue type you want (paginate as far as you want to go, or filter by patch).
Success! You have a ton of match IDs, from there, you can fetch their timelines or parse the matches however you want.
Alternatively, Canisback on the Discord currently hosts a list of matches IDs that you can use to pull summoners from the matches/{matchId} endpoints. These lists are provided for free to the community for use, and may go down or stop being updated at any time.

<https://canisback.com/matchId/matchlist_eun1.json>
