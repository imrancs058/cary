import { useState } from "react";
import { Col, Row } from "react-bootstrap";

interface IEventCard {
  folders: any;
  setFolders: any;
}
const EventCard: React.FC<IEventCard> = ({ folders, setFolders }) => {
  const [folderName, setFolderName] = useState("");
  return (
    <>
      <Col
        style={{
          border: "1px solid #E7E7E7",
          borderRadius: "35px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "#FBF7FE",
          marginTop: "20px",

          width: "361px",
          height: "474px"




        }}
      >
        <div
          style={{
            color: "#000",
            fontFamily: "Merriweather",
            fontSize: "25px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Create your events
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
          <input
            type="text"
            style={{
              border: "1px solid rgba(156, 134, 170, 0.48)",
              paddingLeft: "10px",
              background: "rgba(255, 255, 255, 1)",
              color: "black",
              width: "321px",
              height: "60px",
              top: "1147px",
              left: "215px",

              borderRadius: "600px",


            }}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            style={{
              borderRadius: "60px",
              background:
                "linear-gradient(180deg, #A422F4 -8.33%, #521887 114.17%)",
              borderStyle: "none",
              color: "white",
              fontFamily: "Merriweather",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              padding: "19px 4px", width: "252px",
              height: "60px",




            }}
            onClick={() =>
              setFolders((prev: any) => [
                ...prev,
                {
                  folderName: folderName,
                  url: "/components/Thebest",
                },
              ])
            }
          >
            Create your folder
          </button>
        </div>
        <div
          style={{
            color: "#000",
            fontFamily: "Merriweather",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Try:
        </div>
        <button
          style={{
            borderRadius: "60px",
            padding: "14px 36px",
            border: "1px solid rgba(118, 29, 182, 0.12)",
            background: "rgba(164, 34, 244, 0.07)",

          }}
          onClick={() =>
            setFolders((prev: any) => [
              ...prev,
              {
                folderName: "Job Dinner",
                url: "/components/Thebest",
              },
            ])
          }
        >
          <span
            style={{
              color: "#A422F4",
              fontFamily: "../../styles/fonts",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              padding: "14px 36px",


            }}
          >
            Job Dinner
          </span>
        </button>
        <button
          style={{
            borderRadius: "60px",
            padding: "14px 36px",
            border: "1px solid rgba(118, 29, 182, 0.12)",
            background: "rgba(164, 34, 244, 0.07)",
            fontFamily: "../../styles/fonts",
          }}
          onClick={() =>
            setFolders((prev: any) => [
              ...prev,
              {
                folderName: "Dating with Friend",
                url: "/components/Thebest",
              },
            ])
          }
        >
          <span
            style={{
              color: "#A422F4",
              fontFamily: "../../styles/fonts",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            Dating with Friend
          </span>
        </button>
        <button
          style={{
            borderRadius: "60px",
            padding: "14px 36px",
            border: "1px solid rgba(118, 29, 182, 0.12)",
            background: "rgba(164, 34, 244, 0.07)",
            fontFamily: "../../styles/fonts",
          }}
          onClick={() =>
            setFolders((prev: any) => [
              ...prev,
              {
                folderName: "Lunch with Friend",
                url: "/components/Thebest",
              },
            ])
          }
        >
          <span
            style={{
              color: "#A422F4",
              fontFamily: "../../styles/fonts",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            Lunch with Friend
          </span>
        </button>
      </Col >
    </>
  );
};

export default EventCard;
