# LeagueOfDrafts
A game about drafting in League of Legends

Planning to use Riot API to select a random game.


## Plan 
_u/bongdong420 - reddit idea_
> The best way I see to collect matches is to get a list of summonerIDs from each tier/divison using league-v4 then getting their accountIDs using summoner-v4 then getting their match history using match-v4 then using games from their match history.

_Riot API suggestion_
 
Match Data
The best way to collect a large set of matches is not straightforward. Typically you need code that does this:

Collect a few summoners by hand. Just your own summoner is likely enough, or you could use all challenger players.
Get the account IDs of those summoners.
Get their match history on the queue type you want (paginate as far as you want to go, or filter by patch).
Success! You have a ton of match IDs, from there, you can fetch their timelines or parse the matches however you want.
Alternatively, Canisback on the Discord currently hosts a list of matches IDs that you can use to pull summoners from the matches/{matchId} endpoints. These lists are provided for free to the community for use, and may go down or stop being updated at any time.

<https://canisback.com/matchId/matchlist_eun1.json>

