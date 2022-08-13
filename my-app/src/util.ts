const proxy = "https://powerful-caverns-90911.herokuapp.com/"
const apikey = "RGAPI-b1c9ac6d-fb9a-4e27-b69a-4a662767fd81";

async function getSummonerByName(name: string) {
    const url = proxy + "https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name;
    return await fetch(url, {
        method: "GET",
        headers: {
            "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": apikey,
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
    const url = proxy + "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=" + count;
    return await fetch(url, {
        method: "GET",
        headers: {
            "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": apikey,
        }
    }).then(resp => resp.json()).then(function(data) {
        // console.log(data);
        return data
    })

}

async function getMatch(matchID: string){
    const url = proxy + "https://europe.api.riotgames.com/lol/match/v5/matches/" + matchID;
    return await fetch(url, {
        method: "GET",
        headers: {
            "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": apikey,
        }
    }).then(resp => resp.json())
    .then(function(data) {
        // console.log(data);
        return data
    }).catch(function(error) {
        console.log(error);
    })
}

function whichTeamWon(match: any){
    console.log("match", match)
    if (match.info.teams[0].win === true) {
        return "Blue"
    } else {
        return "Red"
    }
}
    

export {getSummonerByName, getMatchesFromPUUID, getMatch, whichTeamWon}