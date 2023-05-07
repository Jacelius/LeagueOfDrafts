import { Match } from "./types/Match";

async function getSummonerByName(name: string) {
    console.log("trying to fetch summoner by name: " + name)
    const url = "http://localhost:8000/summoner/" + name;
    return await fetch(url).then(response => response.json())
}

async function getMatchIDsFromPUUID(puuid: string, count: number) {
    console.log("trying to fetch matches from puuid: " + puuid)
    const url = "http://localhost:8000/getMatchIDsFromPUUID/" + puuid;
    return await fetch(url).then(response => response.json())
}

async function getMatch(matchID: string){
    console.log("trying to fetch match id: " + matchID)
    if (matchID === "" || matchID === undefined) {
        return null
    }
    const url = "http://localhost:8000/match/" + matchID;
    return await fetch(url).then(response => response.json())
}

function whichTeamWon(match: Match){
    console.log("checking winner team for match id: " + match.info.gameId)
    return match.info.teams[0].win ? "Blue" : "Red"
}

function matchIsARAM(match: Match){
    return match.info.gameMode === "ARAM" ? true : false
}

function matchIsClash(match: Match){ // TODO: check if this is correct
    return match.info.gameMode === "CLASH" ? true : false
}
    

export {getSummonerByName, getMatchIDsFromPUUID, getMatch,
    whichTeamWon, matchIsARAM, matchIsClash}