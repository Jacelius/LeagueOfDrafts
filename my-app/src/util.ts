async function getSummonerByName(name: string) {
    const url = process.env.REACT_APP_PROXY_URL + "https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name;
    return await fetch(url, {
        method: "GET",
        headers: {
            "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": process.env.REACT_APP_RIOT_API_KEY || "",
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(resp => resp.json())
    .then(function(data) {
        // console.log(data);
        return data
    }).catch(function(error) {
        console.log(error);
    })
}

async function getMatchesFromPUUID(puuid: string, count: number) {
    console.log("trying to fetch matches from puuid: " + puuid, "count: " + count)
    const url = process.env.REACT_APP_PROXY_URL + "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=" + count;
    console.log("url", url)
    return await fetch(url, {
        method: "GET",
        headers: {
            "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": process.env.REACT_APP_RIOT_API_KEY || "",
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(resp => resp.json()).then(function(matches) {
        return matches
    })

}

async function getMatch(matchID: string){
    console.log("trying to fetch match: " + matchID)
    const url = process.env.REACT_APP_PROXY_URL + "https://europe.api.riotgames.com/lol/match/v5/matches/" + matchID;
    console.log("url", url)
    return await fetch(url, {
        method: "GET",
        headers: {
            "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": process.env.REACT_APP_RIOT_API_KEY || "",
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(resp => resp.json())
    .then(function(match) {
        console.log("match", match);
        return match
    }).catch(function(error) {
        console.log(error);
    })
}

function whichTeamWon(match: any){
    if (match.info.teams[0].win === true) {
        return "Blue"
    } else {
        return "Red"
    }
}
    

export {getSummonerByName, getMatchesFromPUUID, getMatch, whichTeamWon}