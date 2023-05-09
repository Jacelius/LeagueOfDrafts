import '../style/Champs.css';

interface ChampIconProps {
    champName: string;
    role: string;
}

function ChampIcon({champName, role}: ChampIconProps) {
    const champImgSrc = getChampImgSrc(champName);
    return (
        <div className="flex items-center">
      <div className="flex-shrink-0">
        <img
          className="mx-auto object-contain h-48 w-48"
          src={champImgSrc}
          alt={champName}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/assets/tiles/Gragas_0.jpg";
          }}
        />
      </div>
      <div className="ml-4">
        <p className="font-medium">{champName}</p>
        <p className="text-gray-500">{translateRole(role)}</p>
      </div>
    </div>
    );
}

function getChampImgSrc(champName: string) { 
    const champImgSrc = "/assets/tiles/" + champName + "_0.jpg"; // _0 is added to use default champ image
    // if champ image is not found in assets, use ? instead
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