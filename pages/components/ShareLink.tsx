'use client';


import { GoShareAndroid } from "react-icons/go";
import { FiLink2 } from "react-icons/fi";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ShareAll } from "@/icons/shareall";
import style from '../../styles/sharelink.module.css'
import {
     EmailShareButton,
     FacebookShareButton,
     PinterestShareButton,
     TwitterShareButton,
     EmailIcon,
     FacebookIcon,
     PinterestIcon,
     TwitterIcon,
} from "react-share";
import { Dropdown } from "react-bootstrap";


export default function ShareLink({ to, rounded, title, description, image }: any) {
     const isMobile = useMediaQuery({ maxWidth: 768 });
     // const url = window.location.href;
     // eslint-disable-next-line no-unused-vars
     const [copied, setCopied] = useState(false);

     // Function to copy the link to the clipboard

     const copyToClipboard = () => {
          // Create a temporary input element

          const input = document.createElement("input");

          // Set its value to the link you want to copy

          const linkToCopy = to;
          // Replace with your link

          // console.log("linkToCopy", input);

          input.value = linkToCopy;

          // Append the input element to the DOM

          document.body.appendChild(input);

          // Select the text inside the input

          input.select();

          // Execute the copy command

          document.execCommand("copy");

          // Remove the input element

          document.body.removeChild(input);

          // Set the "copied" state to true

          setCopied(true);
          setMenus(!menus);
     };
     // <<<<<<< zaid
     let roundedBorderStyle = {};

     if (rounded !== 1 && rounded !== 2) {
          roundedBorderStyle = {
               border: "1px solid black",
          };
     }

     let className =
          "font-satoshi text-[14px] rounded-full cursor-pointer border flex justify-center items-center space-x-2";
     if (rounded === 1) {
          className +=
               " w-10 h-10 border-none outline-none text-[12px] text-white rounded-full cursor-pointer flex justify-center items-center";
     } else if (rounded === 2) {
          className +=
               " w-10 h-10 outline-none text-[12px] text-gray-800 rounded-full cursor-pointer flex justify-center items-center bg-[#F2F1F9]";
     } else if (rounded === 3) {
          className +=
               " w-10 h-10 outline-none text-[12px] text-gray-800 rounded-full cursor-pointer flex justify-center items-center ";
     } else {
          className += "cursor-pointer px-6 mb-[50px] h-[45px]";
     }
     let share: any = 1;
     if (rounded === 1 || rounded === 2 || rounded === 3) {
          share = false;
     } else {
          share = true;
     }

     const [menus, setMenus] = useState(false);
     const visibility = () => setMenus(!menus);
     const [state, setState] = useState(false);

     return (
          <div className="relative  top-0 bottom-0 right-0 left-0  ">


               <Dropdown onClick={() => { setState(!state) }}>

                    <Dropdown.Toggle variant="secondary" className={style.customDropdown}>
                         <ShareAll />
                    </Dropdown.Toggle>
                    <Dropdown.Menu onClick={() => { setState(!state) }} className={`${style.dropdownMenu}`}>
                         <Dropdown.Item href="#" style={{
                              position: "relative",
                              top: "-32px",
                              left: "153px",
                              zIndex: 10000,
                         }} className={style.dropdownitem}>
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
                         }} href="#"> <FacebookShareButton
                              onClick={visibility}
                              url={to}
                              hashtag="#arealglam"
                              className="flex hover:bg-gray-5 px-1 items-center gap-x-5"
                         >
                                   <FacebookIcon className={` ${style.dropDownIconCss}   `} />
                                   Facebook
                              </FacebookShareButton></Dropdown.Item>
                         <Dropdown.Item style={{

                              position: 'relative',
                              top: '-35px',
                         }} href="#">
                              <PinterestShareButton
                                   onClick={visibility}
                                   url={to}
                                   media={image}
                                   description={description}
                                   className="flex hover:bg-gray-5 px-1 items-center gap-x-5"
                              >
                                   <PinterestIcon className={` ${style.dropDownIconCss}   `} />
                                   Pinterest
                              </PinterestShareButton>
                         </Dropdown.Item>
                         <Dropdown.Item style={{

                              position: 'relative',
                              top: '-35px',
                         }} href="#"> <TwitterShareButton
                              onClick={visibility}
                              url={to}
                              title={title}
                              className="flex hover:bg-gray-5 px-1 items-center gap-x-5"
                         >
                                   <TwitterIcon className={` ${style.dropDownIconCss}   `} />
                                   Twitter
                              </TwitterShareButton></Dropdown.Item>
                         <Dropdown.Item style={{

                              position: 'relative',
                              top: '-35px',
                         }} href="#"> <EmailShareButton
                              url={to}
                              subject={title}
                              body={description}
                              className="flex hover:bg-gray-5 px-1 items-center gap-x-5"
                         >
                                   <EmailIcon
                                        onClick={visibility}
                                        className={` ${style.dropDownIconCss}   `}
                                   />
                                   Email
                              </EmailShareButton></Dropdown.Item>
                         <Dropdown.Item style={{

                              position: 'relative',
                              top: '-35px',
                         }} href="#">  <p
                              className="flex  items-center gap-x-5 cursor-pointer pb-2"
                              onClick={copyToClipboard}
                         >
                                   <div
                                        onClick={visibility}

                                        className="bg-white  w-[40px] h-[40px] flex justify-center items-center rounded-full"
                                   >
                                        <FiLink2 onClick={visibility} size="5" className={` ${style.dropDownIconCss}   `} />
                                        Copy Link
                                   </div>

                              </p></Dropdown.Item>

                    </Dropdown.Menu>
               </Dropdown >
               {
                    menus && (
                         <div
                              onClick={() => setMenus(false)}
                              className="fixed z-30 h-screen w-[100%] top-0 bottom-0 right-0 left-0"
                         ></div>
                    )
               }

          </div >
     );
};

