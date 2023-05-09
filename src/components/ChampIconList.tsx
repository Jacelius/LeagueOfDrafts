import ChampIcon from './ChampIcon';
import '../style/Champs.css';
import { useState, useEffect } from 'react';
import { Match } from '../types/Match';
import { matchIsARAM } from '../util';

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
            const champNames = getChampNamesFromMatch(match, side);
            let roles: string[];
            if (!matchIsARAM(match)) {
                roles = getRolesFromMatch(match, side);
            } else {
                roles = ["Poro", "Poro", "Poro", "Poro", "Poro"]
            }
            const champIcons = champNames.map((champName, index) => {
                return <ChampIcon key={champName} champName={champName} role={roles[index]}/>
            })
            setChampIcons(champIcons);
            setChampNames(getChampNamesFromMatch(match, side))
        }
    }, [match]); 

    return (
            <div className={"flex flex-col flex-wrap gap-4 items-center justify-center " + borderColor}>
                {champIcons}
            </div>  
        )
}

function getChampNamesFromMatch(match: Match, side: string) {
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