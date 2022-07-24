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
    const champImgSrc = "/assets/tiles/" + champName + "_0.jpg";
    
    return champImgSrc; // "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ashe.png"
}

export default ChampIcon;