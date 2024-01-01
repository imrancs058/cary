import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { card, numberList, headingText, glassyBackground, cardParagraph, numberByList } from '../../../styles/thebest';
import { Share } from '@/icons/share';
import { Off } from '@/icons/collapsoff';
import { On } from "@/icons/collapson";
import { ShareAll } from "@/icons/shareall";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from 'next/router';
import Link from 'next/link';
import ShareLink from "../ShareLink";
import style from '../../../styles/sharelink.module.css'

const CardItem = ({ number, content, imageUrl }: any) => {
     const [isContentVisible, setIsContentVisible] = useState(false);

     const toggleContent = () => {
          setIsContentVisible(!isContentVisible);
     };
     const cardImageDiv = {
          background: `url(${imageUrl})`, // Adjust the path based on your project structure
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          width: "100%",
          height: "18rem",
          marginTop: '0.2rem',
          borderRadius: "10px",
     };
     const listStyles = {
          opacity: isContentVisible ? 1 : 0, // Change opacity based on visibility
          transition: 'opacity 0.3s ease', // Apply transition to opacity only
     };
     return (
          <Col sm={4} className="mb-2 p-3">
               <div className={`shadow p-2 ${style.card}`}>
                    <Link style={{ textDecoration: 'none' }} href="thebestcard/[id]" as="thebestcard/1">
                         <div style={cardImageDiv}>
                              <div className="row">
                                   <div className="col-6">
                                        <span style={numberList}>{number}/9</span>
                                   </div>
                                   <div className="col-6">
                                        <span className={`${style.glassyBackground} float-right font-weight-bold`} >
                                             <Share />
                                        </span>
                                   </div>
                                   <div className="col-12">
                                        <span style={numberByList}>{number}/{number}</span>
                                   </div>
                              </div>
                         </div>
                    </Link>
                    <span>
                         <span className="d-flex">
                              <p style={cardParagraph}>{content}</p>{" "}
                              <span className="mt-3" onClick={toggleContent}>
                                   {isContentVisible ? <Off /> : <On />}
                              </span>
                         </span>
                    </span>
                    {isContentVisible && (
                         <ul style={{ transition: "opacity 0.3s ease 0 0.3s ease" }}>
                              <li>Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia.</li>
                              <li>Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia.</li>
                              <li>uisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.</li>
                         </ul>
                    )}

               </div>

          </Col>
     );
};

const Thebest = () => {
     const router = useRouter();
     const { id } = router.query;
     console.log(id, "id")
     const [index, setIndex] = useState(Number(id))
     const cardItems = [
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image3.png" },
          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" }, { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image3.png" },
          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image3.png" },
          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },

          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          ]
     ];
     useEffect(() => {

     }, [index])
     return (
          <>
               <NavBar />
               <div className="row mt-4 p-5 m-5">

                    <div className="col-10"><span style={headingText}> The Best</span></div>
                    <div className="col-2 mt-"> <ShareLink
                         to={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/brands`}
                         fontSize={"28px"}
                         title="A Real Glam | Brands"
                         description="Explore our curated selection of popular and emerging brands known for their exceptional products. Discover your next favorite brand with A Real Glam today."
                         image="https://admin.arealglam.com/website/images/1700661144.png" /></div>
               </div >

               {id && index && cardItems[Number(id)] ? <Row className="p-3 m-4">
                    {cardItems[index].map((item, index) => (
                         <CardItem key={index} {...item} imageUrl={item.imageUrl} />
                    ))}
               </Row> : null}

               <Footer />
          </>
     );
};

export default Thebest;
