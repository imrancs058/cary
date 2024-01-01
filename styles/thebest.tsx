

export const card: React.CSSProperties = {
     borderRadius: '48px',
     cursor: "pointer",
};
export const cardForCard: React.CSSProperties = {
     width: '75%',
     height: '100%',
     borderRadius: '40px',
     cursor: "pointer",
     padding: '15px',
     margin: '2% 10%'
};
export const cardImageDiv: React.CSSProperties = {
     background: 'url("/image1.png")', // Adjust the path based on your project structure
     backgroundSize: '100%',
     backgroundRepeat: 'no-repeat',
     width: "100%",
     height: "18rem",
     // borderRadius:"100px"
     marginTop: '0.2rem',
};

export const cardImageDivForCard: React.CSSProperties = {
     background: 'url("/image2.png")', // Adjust the path based on your project structure
     width: "100%",
     height: "30rem",
     backgroundSize: '100%',
     backgroundRepeat: 'no-repeat',
     marginTop: '0.2rem',
     borderRadius: "32px"

};
export const glassyBackground: React.CSSProperties = {
     background: "rgba(255, 255, 255, 0.57)",
     backdropFilter: 'blur(20px)',
     borderRadius: '100px',
     padding: '15px',
     position: 'relative',
     top: '2rem',
     left: '3.5rem',
     margin: '1.5rem',
     color: "#000",
     //fontFamily: "Satoshi",
     fontStyle: "normal",
     fontSize: "15px",
     fontWeight: 600,
     lineHeight: "normal",
     flexShrink: 0,



};

export const numberList: React.CSSProperties = {
     background: "linear-gradient(180deg, #A422F4 -8.33%, #521887 114.17%)",
     borderRadius: '100px',
     padding: '18px',
     position: "relative",
     top: '2rem',
     margin: '1.5rem',
     color: "#FFF",
     //fontFamily: "Satoshi",
     fontWeight: 700,
     fontSize: "15px",
};



export const numberListForCard: React.CSSProperties = {

     position: 'relative',
     top: '-20px',
     padding: "25px"
};

export const numberByList: React.CSSProperties = {
     background: "white",
     borderRadius: '100px',
     padding: '18px',
     position: 'relative',
     top: '13rem',
     margin: '1.5rem',
     color: "#000",
     //fontFamily: "Satoshi",
     fontStyle: "normal",
     fontSize: "15px",
     fontWeight: 600,
     lineHeight: "normal",
     flexShrink: 0,

};




type MediaQueries = {
     maxWidth1550: React.CSSProperties;
     maxWidth1900: React.CSSProperties;

};

const mediaQueries: MediaQueries = {
     maxWidth1550: {
          width: "20px",
     },
     maxWidth1900: {
          width: "200px",
     },

};

export const cardItemCss: React.CSSProperties = {
     border: "1px solid #E7E7E7",
     borderRadius: "35px",
     padding: "15px",
     display: "flex",
     flexDirection: "column",
     gap: "10px",
     background: "#FBF7FE",
     marginTop: "20px",
     width: "361px", // Default width
     height: "474px", // Default height
     ...mediaQueries.maxWidth1550,
     ...mediaQueries.maxWidth1900,
};

// Media queries for different viewport widths
const customMediaQueries = `
     @media (max-width: 1550px) {
       width: 200px;
     }
     @media (max-width: 1900px) {
       width: 300px;
     }
     
   `;

// Append media queries to cardItemCss
(cardItemCss as any)[customMediaQueries] = true;



export const numberByListForCard: React.CSSProperties = {
     background: "white",
     borderRadius: '100px',
     padding: '18px',
     position: 'relative',
     top: '23rem',
     margin: '1.5rem',
     color: "#000",
     //fontFamily: "Satoshi",
     fontStyle: "normal",
     fontSize: "15px",
     fontWeight: 600,
     lineHeight: "normal",
     flexShrink: 0,

};


export const headingText: React.CSSProperties = {
     color: "#000",
     fontFamily: "Merriweather",
     fontSize: "25px",
     fontStyle: "normal",
     fontWeight: 700,
     lineHeight: "39px", /* 169.565% */
     // textTransform: "capitalize",
};



export const cardParagraph: React.CSSProperties = {
     color: "#000",
     //fontFamily: "Satoshi",
     fontSize: "15px",
     fontStyle: "normal",
     fontWeight: 600,
     lineHeight: "27px",
     padding: '8px' /* 170% */
};

export const cardParagraphForCard: React.CSSProperties = {
     //fontFamily: "Satoshi",
     fontSize: "1.6rem",
     fontWeight: 700,
     // lineHeight: "57px",
     letterSpacing: "0em",
     textAlign: "left",
};

export const customCard: React.CSSProperties = {
     backgroundColor: "#f8f9fa",
     padding: "15px",
     border: "1px solid #dee2e6",
     marginTop: "15px",
     borderRadius: "5px",
     overflow: "hidden",
};
export const customContent: React.CSSProperties = {
     maxHeight: 0,
     overflow: "hidden",
     transition: "max-height 0.3s ease-out",
};
export const customContentShow: React.CSSProperties = {
     maxHeight: "1000px"
};




