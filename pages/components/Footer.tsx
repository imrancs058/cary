import { Col, Row } from "react-bootstrap";
import Image from 'next/image';
import { footerLogo, footerDiv, footerText, CopyRight, footerHr } from '../../styles/footer'
import { Instagram } from "@/icons/intagram";
import footerlogo from "../../public/footerlogo.svg";
import styles from '../../styles/footer.module.css';
const Footer = () => {
     return (

          <Row style={footerDiv} className=" mt-5">
               {/* Footer Upperside */}
               <div className="row" >
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4 text-center  p-2">
                         <span >
                              <Image style={footerLogo} alt="some error" src={footerlogo} />
                         </span>
                    </div>
                    <div className="col-sm-4">


                    </div>
                    <div className="col-12">

                         <div className="row" >
                              <div className="col-3"><hr className={styles.footer_Text_Hr_left} /></div>

                              <div className="col-6 text-center ">
                                   <div className="row" >
                                        <div className={`${styles.footer_Text} col-12 `}><span className="br-class">Follow the founder and send </span> ideas and feedback</div>
                                        <div className="col-12 " >
                                             <Instagram />
                                        </div>
                                   </div>
                              </div>
                              <div className="col-3"><hr className={styles.footer_Text_Hr_right} /></div>
                         </div>
                    </div>

               </div>
               {/* Footer Lowerside */}
               <div className="row  m-2">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8"><hr style={footerHr} /></div>
                    <div className="col-lg-2"></div>

                    <div className="col-sm-5 text-center ">
                         <div style={CopyRight} className=" text-center">
                              Copyright 2023 . All Right Reserved A Real Glam
                         </div>
                    </div>
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-5 text-center p-1">
                         <div className={` ${styles.bottom_text}`}>
                              Terms of Service | Privacy Policy
                         </div>
                    </div>
               </div>
          </Row>

     );
};

export default Footer;
