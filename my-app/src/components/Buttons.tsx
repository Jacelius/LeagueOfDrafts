import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import '../style/Buttons.css';
import {useState} from 'react';
import {getSummonerByName, getMatchIDsFromPUUID, getMatch} from '../util'

interface matchIDsProps {
  matchIDs: string[];
  setMatchIDs: (matchIDs: any[]) => void;
  latestMatch: string;
  setLatestMatch: (latestMatch: any) => void;
  nextMatch: () => void;
}

function Buttons({matchIDs, setMatchIDs, latestMatch, setLatestMatch, nextMatch}: matchIDsProps) {
  const [tier, setTier] = useState("Random Tier"); // idea: color change based on rank
  const [queue, setQueue] = useState("Ranked Solo/Duo"); // idea: color change based on queue
  const PUUID = process.env.REACT_APP_JACELIUS_PUUID || "";
  async function getmatchIDs() {
    const matchIDList = await getMatchIDsFromPUUID(PUUID, 20)
    console.log("match id list", matchIDList)
    setMatchIDs(matchIDList)
    setLatestMatch(await getMatch(matchIDList[0]))
  }

  return (
    <div className="buttons"> 
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {tier}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setTier("Random Tier")}>Random Tier</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Iron")}>Iron</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Bronze")}>Bronze</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Silver")}>Silver</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Gold")}>Gold</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Platinum")}>Platinum</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Diamond")}>Diamond</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Master")}>Master</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Grandmaster")}>Grandmaster</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Challenger")}>Challenger</Dropdown.Item>
          <Dropdown.Item onClick={() => setTier("Professional")}>Professional</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {queue}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={() => setQueue("Normal")}>Normal</Dropdown.Item>
            <Dropdown.Item onClick={() => setQueue("Ranked Solo/Duo")}>Ranked Solo/Duo</Dropdown.Item>
            <Dropdown.Item onClick={() => setQueue("Ranked Flex")}>Ranked Flex</Dropdown.Item>
            <Dropdown.Item onClick={() => setQueue("ARAM")}>ARAM</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>

      <Button onClick={() => getmatchIDs()}> Fetch Jacelius' matchIDs </Button>
      <Button onClick={() => nextMatch()}> Next match </Button>
    </div>
  );
}



export default Buttons;