# Roadmap

## Create a game between 2 people (not logged in)
- must be able to create a 'game'. This is really just a dynamic URL. 
- The player to first create the game must add their nickname. 
- They can share this URL with a friend.
- The friend can then enter their name and play.
- Names will be stored to localStorage (or player status (p1, p2)) so that we can make sure who's who.
- The page will use the game id from the URL to submit to an endpoint (/play! )
- To enable the async nature of when someone might play, we need to store this somewhere (the db) - I don't see us 
- being able to play async without somehow storing the current state of play.
- We'd want to store player 1, player 2 and their choices from the enum (R/P/S) in the flat file (this would require fs 
  write though). Maybe like p1:r, p2:s
- _yjs might be fun. but overkill (or what?) I think it requires concurrency to work (as in both active at once)_
- yjs is on the tech radar so there's that.
- Ok, so we need to store the game state on a game object. We could arguably use a [gameId].txt file flat-file 
   structure to store this, because why not. This would mean we could get away without any DB interaction, however, 
   we'll need it shortly after completing this so it might be worthwhile. But as an agnostic RPS game it could work. 
   On both players having sent their choices, the server would simply respond with [X is the winner]. 
- The server should be able to send 'it was a draw!, try again' or similar to enable retrys.
- I think this is a decent first-pass. 
- 
## Create the idea of a tournament
- We need to be able to create a tournament - user can select between creating a tournament or a 1/off RPS.
- We'd want to somehow be able add a list of users.
- For first pass we want to send a single tournament link.
- On opening a set tournament link, a user can select their name from the list. 
- We'd then move them to their first battle. Where they can pick their weapon... and FIGHT. 
- We'd notify of battle status. I'd think the tournament should maybe be always-visible for sudden death, round 
  robin would need some thought (maybe a leaderboard of wins/losses. depending on # the top 4 can battle it out, etc 
  (Follow world cup rules))
- And we'd navigate users through their games. A death would simply show the tournament. 
- I think the game play window and tournament should be in the same view. 
- At some point we'd want to be able to toggle between a round robin and sudden death tournament.
 
## Update so that people can login, convert entire system to DB (if not already there)
- Ok, next step is to enable login via slack. This would probably still require the user to enter their nickname? 
   Prefilled with their slack name?
- We'd then move to storing the game data in a game object alongside the other db details.
- Most of the logic should already be done in 1 and 2 above.

## Update the UI to match.
- I think it would be nice to try knock the UI slickness out the park. 

## Create proper slack integration with thread scraping, auto-tourny generation, etc.
- So the holy grail - we recreate the wordle widget.
- It works similar to what it currently does, but at a given time (2pm?) it scrapes the results and picks the winners.
- It then auto-generates a tournament for the winners
- we should be able to adjust with some kind of config.
- It'll send the link to each contestant in a rad in-channel DM (if this is possible) otherwise via bot-app-dm. 
- Users battle it out, logging in via their slack.
- We auto-set the 'Winner won the day' for the thread.

## DB Creation
Need to create db tables for:
1. Game
    This includes:
   - game id
   - game hash?? (or is this saved in a different table of hashmap) <- for url.
   - player 1 and player 2 user IDs.
   - choice of R/P/S for each player.
   - outcome (or should that be calculated on the fly?)
   - PUT apis for each player to update a given game.
2. Enum for R/P/S options.
3. Player/User
   - id
   - name
   - nickname? 
   - rest is fine to replicate User model.


