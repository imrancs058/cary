import { Dropdown } from "react-bootstrap";
import React, { useState } from 'react'

export interface States {
  propState: string,
  propVal: string
}
const DropDown = ({ propState = "", propVal }: any) => {

  return (

    <>
      <Dropdown onClick={() => { propState(!propVal) }}>

        <Dropdown.Toggle variant="secondary" id="customDropdown">
          John Deo<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style={{ color: 'rgba(104, 99, 95, 1)', marginLeft: '5px', fontSize: '10px' }} className="bi bi-chevron-down " viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={() => { propState(!propVal) }} style={{ right: 0 }}>


          <Dropdown.Item href="#" style={{
            position: "relative",
            top: "-32px",
            left: "153px",
            zIndex: 10000,
          }}>
            <svg width="30" height="30" viewBox="0 0 298 283" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-outside-1_1_4" maskUnits="userSpaceOnUse" x="0.928933" y="-14.1421" width="296.985" height="296.985" fill="black">
                <rect fill="white" x="0.928933" y="-14.1421" width="296.985" height="296.985" />
                <path d="M106.995 42.4264C130.426 18.995 168.416 18.995 191.848 42.4264L290.843 141.421L149.421 282.843L8 141.421L106.995 42.4264Z" />
              </mask>
              <path d="M106.995 42.4264C130.426 18.995 168.416 18.995 191.848 42.4264L290.843 141.421L149.421 282.843L8 141.421L106.995 42.4264Z" fill="white" />
              <path d="M99.9239 35.3553C127.261 8.01864 171.582 8.01864 198.919 35.3553L297.914 134.35L283.772 148.492L184.777 49.4975C165.25 29.9713 133.592 29.9713 114.066 49.4975L99.9239 35.3553ZM149.421 282.843L8 141.421L149.421 282.843ZM0.928933 134.35L99.9239 35.3553C127.261 8.01864 171.582 8.01864 198.919 35.3553L184.777 49.4975C165.25 29.9713 133.592 29.9713 114.066 49.4975L15.0711 148.492L0.928933 134.35ZM290.843 141.421L149.421 282.843L290.843 141.421Z" fill="#CABFD2" mask="url(#path-1-outside-1_1_4)" />
            </svg>
          </Dropdown.Item>
          <Dropdown.Item style={{

            position: 'relative',
            top: '-35px',
          }} href="#">Follow on Instagram</Dropdown.Item>
          <hr style={{
            borderWidth: '2px',
            width: "180px",
            color: "rgba(224, 221, 221, 1)",
            marginLeft: "20px",
            position: 'relative',
            top: '-37px',
          }} />
          <Dropdown.Item href="#">Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown >
    </>

  );
};

export default DropDown;
