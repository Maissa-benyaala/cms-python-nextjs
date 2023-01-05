import React from "react";
import Test from "../components/Test";

const index = ({ data }: any) => {
  return <Test meta="english" header={data.header} body={data.body} footer={data.footer} />;
};

export async function getServerSideProps() {
const data = require('../data.json')
  return {
    props: {
      data,
    },
  };
}

export default index;
