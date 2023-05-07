from typing import Union
import dotenv
from fastapi import FastAPI
import os
import requests

app = FastAPI()
dotenv.load_dotenv()
riot_api_key = os.getenv("RIOT_API_KEY")
if riot_api_key is None:
    raise Exception("No API key found in .env file")
riot_base_url = "https://eun1.api.riotgames.com/lol/"

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/summonerByName/{name}")
def get_summoner_by_name(name: str):
    print("Getting summoner by name")
    print("api_key: " + riot_api_key)
    url = riot_base_url + "summoner/v4/summoners/by-name/" + name
    headers = {
        "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "X-Riot-Token": riot_api_key
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        error_text = response.json()["status"]["message"]
        return { "status_code": response.status_code, "error": error_text}

@app.get("/getMatchIDsFromPUUID/{puuid}")
def get_match_ids_from_puuid(puuid: str, count: int = 20):      
    print(f"trying to fetch matches from puuid: {puuid}, count: {count}")
    url = f"https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?start=0&count={count}"
    headers = {
        "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "X-Riot-Token": riot_api_key,
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        error_text = response.json()["status"]["message"]
        return { "status_code": response.status_code, "error": error_text}

@app.get("/match/{match_id}")
def get_match_by_id(match_id: str):
    print(f"trying to fetch match from match_id: {match_id}")
    url = f"https://europe.api.riotgames.com/lol/match/v5/matches/{match_id}"
    headers = {
        "Accept-Language": "da-DK,da;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "X-Riot-Token": riot_api_key,
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:

        return response.json()
    else:
        error_text = response.json()["status"]["message"]
        return { "status_code": response.status_code, "error": error_text}

