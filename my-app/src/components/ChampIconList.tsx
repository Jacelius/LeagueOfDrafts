import ChampIcon from './ChampIcon';
import '../style/champs.css';

interface ChampIconListProps {
    side: string;
}

function ChampIconList( {side} : ChampIconListProps ) {
    let textAlign = getTextAlign(side);
    // TODO: get champNames based on actual game
    // TODO: border color based on side
    return (
            <div className={"champIconList " + textAlign}>
                <ChampIcon champName="Ahri"/>
                <ChampIcon champName="Ashe"/>
                <ChampIcon champName="Ezreal"/>
                <ChampIcon champName="Pyke"/>
                <ChampIcon champName="Zilean"/>
            </div>  
        )
}

function getTextAlign(side: string) {
    let textAlign = "";
    side === "Blue" ? textAlign = "textAlignLeft" :  textAlign = "textAlignRight";
    return textAlign
}

export default ChampIconList;