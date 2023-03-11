import '../style/champs.css';

interface ChampIconProps {
    champName: string;
    role: string;
}

function ChampIcon({champName, role}: ChampIconProps) {
    const champImgSrc = getChampImgSrc(champName);
    return (
        <div className="champ-icon">
            <img src={champImgSrc} alt={champName}/>
            <p>{translateRole(role)} : {champName}</p>
        </div>
    );
}

function getChampImgSrc(champName: string) { 
    const champImgSrc = "/assets/tiles/" + champName + "_0.jpg"; // _0 is added to use default champ image
    return champImgSrc; // alternative web source: "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ashe.png"
}

function translateRole(role: string) {
    switch (role) {
        case "TOP":
            return "Top"
        case "JUNGLE":
            return "Jungle"
        case "MIDDLE":
            return "Mid"
        case "BOTTOM":
            return "Bot"
        case "UTILITY":
            return "Support"
        case "Poro":
            return "PoroPetter" 
        default:
            return "unknownRole"
    }
}

export default ChampIcon;