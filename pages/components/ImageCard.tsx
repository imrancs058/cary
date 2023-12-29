
import React from "react";
import { Col, Row } from "react-bootstrap";

interface IImageCard {
  number: number;
  circleNumber: string;
  title?: string;
  description?: string;
}
const ImageCard: React.FC<IImageCard> = ({ img, number, circleNumber }) => {
  return (
    <>
      <Col
        lg={4}
        md={4}
        sm={12}
        xs={12}
        style={{
          border: "1px solid #E7E7E7",
          borderRadius: "35px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: "white",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "464px",
            padding: "20px",
            borderRadius: "30px",
            background: `url(${img})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundPosition: "100%",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              borderRadius: "600px",
              background: "rgba(255, 255, 255, 0.37)",
              backdropFilter: "blur(5px)",
              width: "90px",
              height: "90px",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#FFF",

                fontFamily: "Satoshi",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: "normal",
              }}
            >
              {number}
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "72px",
              flexShrink: 0,
              borderRadius: "600px",
              background: "rgba(255, 255, 255, 0.22)",
              backdropFilter: "blur(2.5px)",
              padding: "6px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                flexShrink: 0,
                background: "white",
                borderRadius: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "7px",
              }}
            >
              {circleNumber}
            </div>
            <div
              style={{
                width: "151px",
                height: "60px",
                flexShrink: 0,
                borderRadius: "60px",
                background: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Buy / Yes
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            color: "#000",

            fontFamily: "Satoshi",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "34px",
          }}
        >
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            width: "100%",
          }}
        >
          <ul>
            <li>
              Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia.
            </li>
            <li>Sed iaculis lorem nec massa suscipit, at turpis</li>
            <li>
              Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget
              consequat arcu dignissim quis. Aenean dignissim.
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};

export default ImageCard;
