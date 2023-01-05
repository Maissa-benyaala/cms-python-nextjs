import React from "react";

const Header = ({ content, style }: any) => (
  <header style={style} dangerouslySetInnerHTML={{ __html: content }} />
);
const Body = ({ content, style }: any) => (
  <main style={style} dangerouslySetInnerHTML={{ __html: content }} />
);
const Footer = ({ content, style }: any) => (
  <footer style={style} dangerouslySetInnerHTML={{ __html: content }} />
);


const Test = ({ header, body, footer, meta }: any) => (
  <>
    <Header content={header.content[meta]} style={header.style} />
    <Body content={body.section1.content[meta]} style={body.style} />
    <Footer content={footer.content} style={footer.style} />
  </>
);

export default Test;
