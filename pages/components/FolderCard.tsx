import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import folder from "../../public/folder.svg";
import { Question } from '../../icons/question'
import { InfoHoverIcon } from '../../icons/infoHoverIcon'
import { ShareHoverIcon } from '../../icons/sharehovericon'
import { Share } from '../../icons/share'
import Link from "next/link";
import { useState } from "react";
import styles from '../../styles/style.module.css';
interface IFolderCard {
  folderName: string,
  link: String
}
const FolderCard = ({ folderName, link }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Col
        className={`${styles.cardItemCss} `}
        style={{
          transition: "background-color 0.3s, color 0.3s",
          border: isHovered ? '1px solid  rgba(115, 28, 179, 1)' : '1px solid #E7E7E7',


        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div
          style={{
            color: "#000",
            fontFamily: "Merriweather",
            fontSize: "25px",
            paddingRight: "20px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            display: "flex",
            justifyContent: "end",
            gap: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "60px",
              height: "60px",
              padding: "10px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              borderRadius: "60px",
              border: "1px solid #BD93F1",
              background: "#FFF",
            }}
          >
            {isHovered ? <><InfoHoverIcon /></> : <><Question /></>}
          </div>

          <div
            style={{
              display: "flex",
              width: "60px",
              height: "60px",
              padding: "10px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              borderRadius: "60px",
              border: "1px solid #BD93F1",
              background: "#FFF",
            }}
          >
            {isHovered ? <><ShareHoverIcon /></> : <> <Share /></>}

          </div>


        </div>
        <Link href={link}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "254px",
            }}
          >
            <Image src={folder} alt="GFG logo imported from public directory" />
          </div>
        </Link>
        <div
          className={styles.cardItem_bootom_text}
          style={{
            backgroundColor: isHovered ? 'rgba(115, 28, 179, 1)' : 'rgba(234, 215, 255, 1)',
          }}
        >
          <span
            style={{
              transition: "background-color 0.3s, color 0.3s",
              color: isHovered ? 'white' : '#A422F4',
              whiteSpace: "nowrap"
            }}
          >
            {folderName}
          </span>
        </div>
      </Col>
    </>
  );
};

export default FolderCard;
