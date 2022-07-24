import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react';

function Buttons() {
  const [tier, setTier] = useState("Random Tier");

  return (
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
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Buttons;