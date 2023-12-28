import { Dropdown } from "react-bootstrap";


const DropDown = () => {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="secondary" id="customDropdown">
        John Deo   <img src="arrow-down.svg" alt="Custom Icon" className="custom-svg-icon"></img>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ right: 0 }}>
        <Dropdown.Item href="#"></Dropdown.Item>
        <Dropdown.Item href="#">Follow on Instagram</Dropdown.Item>
        <hr style={{
          width: "180px",
          color: "rgba(224, 221, 221, 1)",
          marginLeft: "20px"
        }} />
        <Dropdown.Item href="#">Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
