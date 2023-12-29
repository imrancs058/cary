import { Dropdown } from "react-bootstrap";


const DropDown = () => {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="secondary" id="customDropdown">
        John Deo   <img src="arrow-down.svg" alt="Custom Icon" className="custom-svg-icon"></img>
      </Dropdown.Toggle>
      <span style={{
        position: "relative",
        top: "32px",
        left: "-49px"
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>
      </span>
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
