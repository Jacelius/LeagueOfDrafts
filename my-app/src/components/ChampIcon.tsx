import '../style/champs.css';

interface ChampIconProps {
    champName: string;
}

function ChampIcon({champName}: ChampIconProps) {
    const champImgSrc = getChampImgSrc(champName);
    return (
        <div className="champ-icon">
            <img src={champImgSrc} alt={champName}/>
        </div>
    );
}

function getChampImgSrc(champName: string) { 
    const champImgSrc = "/assets/tiles/" + champName + "_0.jpg"; // _0 is added to use default champ image
    
    return champImgSrc; // alternative web source: "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ashe.png"
}

export default ChampIcon;