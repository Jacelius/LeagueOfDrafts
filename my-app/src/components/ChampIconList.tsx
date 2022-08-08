import ChampIcon from './ChampIcon';
import '../style/champs.css';

interface ChampIconListProps {
    side: string;
}

function ChampIconList( {side} : ChampIconListProps ) {
    let borderColor = getBorderColorFromSide(side);
    // TODO: get champNames based on actual game
    // TODO: border color based on side
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

function getBorderColorFromSide(side: string) {
    let borderColor = "";
    side === "Blue" ? borderColor = "borderColorBlue" :  borderColor = "borderColorRed";
    return borderColor
}

export default ChampIconList;