import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Image from "next/image";
import user from "../../public/user.svg";
import arrow_down from "../../public/arrow-down.svg";
import { Menu } from "@/icons/menu";
import DropDown from "./Dropdown";
import React, { useEffect, useState } from 'react'
import styles from '../../styles/style.module.css';
const NavBar = () => {
  const [state, setState] = useState(false);
  const handlePageClick = (event: any) => {
    // Your logic when a click occurs anywhere on the page
    console.log('Clicked on the page!', event);
    setState(false)
  };
  useEffect(() => {
    // Add click event listener to the document
    document.addEventListener('click', handlePageClick);

    // Clean up the event listener on component unmount
    // return () => {
    //   document.removeEventListener('click', handlePageClick);
    // };
  }, [state]);
  function toggleOptions() {
    var options: any = document.getElementById('options');
    options.style.display = (options.style.display === 'block') ? 'none' : 'block';
  }
  return (
    <>


      <Row className="bg-white navbar_row">
        <Col className="menu_col" lg={0} md={0} sm={4} xs={2}>
          <div>

            <div className="icon-container" onClick={() => toggleOptions()}>

              <Menu />


              <div className="options" id="options">

                <div>Follow on Instagram</div>
                <div>Log out</div>

              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={4} xs={8}>
          <div className="image_div">

            <span className="imageDiv"></span>
            {/* <Image src={logo} alt="GFG logo imported from public directory" /> */}
          </div>
        </Col>

        <Col lg={5} md={5} sm={4} xs={2}>
          <div className="user_logo_div">

            <div className="User-image"></div>
            <div className="user_name">
              <DropDown propState={setState} propVal={state} />


            </div>

          </div>
          <span className={state ? styles.navbarIconBefor : styles.navbarIconAfter}>


          </span>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
