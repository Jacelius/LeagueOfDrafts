import ChampIcon from './ChampIcon';
import '../style/champs.css';

interface ChampIconListProps {
    side: string;
}

function ChampIconList( {side} : ChampIconListProps ) {
    let textAlign = getTextAlign(side);
    return (
            <div className={textAlign}>
                <ChampIcon/>
                <ChampIcon/>
                <ChampIcon/>
                <ChampIcon/>
                <ChampIcon/>
            </div>  
        )
}

function getTextAlign(side: string) {
    let textAlign = "";
    side === "Blue" ? textAlign = "textAlignLeft" :  textAlign = "textAlignRight";
    return textAlign
}

export default ChampIconList;