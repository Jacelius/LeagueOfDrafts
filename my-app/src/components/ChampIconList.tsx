import ChampIcon from './ChampIcon';
import '../style/champs.css';
import { useState, useEffect } from 'react';
import { getMatch } from '../util';

interface matchesProps {
    matches: string[];
    setMatches: (matches: string[]) => void;
}

interface ChampIconListProps extends matchesProps{
    side: string;
}


function ChampIconList( {side, matches, setMatches}: ChampIconListProps ) {
    let borderColor = getBorderColorFromSide(side);
    // TODO: get champNames based on actual game
    // TODO optimization: champIconlist should only hold 1 single match, or maybe even only the champNames
    const [champNames, setChampNames] = useState<string[]>([]);

    useEffect(() => {
        if (matches.length > 0) {
            getMatch(matches[0]).then(match => {
                console.log("champNames", getChampNamesFromMatch(match, side))
                setChampNames(getChampNamesFromMatch(match, side))
            })
        }
    }, [matches]); 

    return (
            <div className={"champIconList " + borderColor}>
                <ChampIcon champName="Ahri"/>
                <ChampIcon champName="Ashe"/>
                <ChampIcon champName="Ezreal"/>
                <ChampIcon champName="Pyke"/>
                <ChampIcon champName="Zilean"/>
            </div>  
        )
}

function getChampNamesFromMatch(match: any, side: string) {
    // console.log("getChampNamesFromMatch match object", match)
    let champNames: string[] = [];
    if (side === "Blue") {
        // go through participants 0-4
        for (let i = 0; i < 5; i++) {
            champNames.push(match.info.participants[i].championName);
        }
    }
    else if (side === "Red") {
        // go through participants 5-9
        for (let i = 5; i < 10; i++) {
            champNames.push(match.info.participants[i].championName);
        }
    }
    return champNames
}

function getBorderColorFromSide(side: string) {
    let borderColor = "";
    side === "Blue" ? borderColor = "borderColorBlue" :  borderColor = "borderColorRed";
    return borderColor
}

export default ChampIconList;