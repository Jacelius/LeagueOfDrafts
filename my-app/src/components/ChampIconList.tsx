import ChampIcon from './ChampIcon';
import '../style/champs.css';
import { useState, useEffect } from 'react';
import { getMatch } from '../util';

interface ChampIconListProps {
    side: string;
    match: any;
}


function ChampIconList( {side, match} : ChampIconListProps) {
    let borderColor = getBorderColorFromSide(side);
    const [champNames, setChampNames] = useState<string[]>([]);
    const [champIcons, setChampIcons] = useState<any[]>([]);

    useEffect(() => {
        if (match != null) {
            getMatch(match).then(match => {
                const champNames = getChampNamesFromMatch(match, side);
                const roles = getRolesFromMatch(match, side); // TODO: put this in ChampIcon component
                const champIcons = champNames.map(champName => {
                    return <ChampIcon key={champName} champName={champName} role={"ROLE"}/>
                })
                setChampIcons(champIcons);
                setChampNames(getChampNamesFromMatch(match, side))
            })
        }
    }, [match]); 

    return (
            <div className={"champIconList " + borderColor}>
                {champIcons}
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

function getRolesFromMatch(match: any, side: string) {
    let roles: string[] = [];
    if (side === "Blue") {
        // go through participants 0-4
        for (let i = 0; i < 5; i++) {
            roles.push(match.info.participants[i].teamPosition);
        }
    }
    else if (side === "Red") {
        // go through participants 5-9
        for (let i = 5; i < 10; i++) {
            roles.push(match.info.participants[i].teamPosition);
        }
    }
    return roles
}

function getBorderColorFromSide(side: string) {
    let borderColor = "";
    side === "Blue" ? borderColor = "borderColorBlue" :  borderColor = "borderColorRed";
    return borderColor
}

export default ChampIconList;