import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import '../style/Buttons.css';
import {useState} from 'react';
import {getSummonerByName, getMatchesFromPUUID, getMatch} from '../util'

interface matchesProps {
  matches: string[];
  setMatches: (matches: string[]) => void;
}

function Buttons({matches, setMatches}: matchesProps) {
  const [tier, setTier] = useState("Random Tier"); // idea: color change based on rank
  const [queue, setQueue] = useState("Ranked Solo/Duo"); // idea: color change based on queue
  const [latestMatch, setLatestMatch] = useState<any>();

  async function getMatches() {
    const matchList = await getMatchesFromPUUID("2pCBdfWyhMmnbsWEGhRsAROv7MUDWYzg3g6Yhvq_vjMKx-p8HilPiegrnyEZJR6HO-xkAVkpRYXB8g", 20)
    console.log("matchList", matchList)
    setMatches(matchList)
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

      <Button onClick={() => getMatches()}> Fetch Jacelius' matches </Button>
      <Button onClick={() => getMatch(matches[0])}> get Jacelius' latest match </Button>
    </div>
  );
}



export default Buttons;