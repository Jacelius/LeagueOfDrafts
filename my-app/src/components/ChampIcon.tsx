function ChampIcon() {
    return (
        <div className="champ-icon">
            <img src={getChampImgSrc()} />
        </div>
    );


}

function getChampImgSrc() {
    return "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ashe.png";
}

export default ChampIcon;