import React from 'react'
import Casesutdybox from '../components/casestudy';

function Home() {
  const staticData = {
    datax: [
      {
        id: 1,
        title: "Case Study 1",
        description: "Description for case study 1.",
        image: "/images/casestudy1.png",
      },
      {
        id: 2,
        title: "Case Study 2",
        description: "Description for case study 2.",
        image: "/images/casestudy2.png",
      },
    ],
    info: {
      sub_title: "Discover how our projects make an impact.",
      button_1_title: "View More",
      button_1_url: "/view-more",
    },
  };

  return (
    <Casesutdybox datax={staticData.datax} info={staticData.info} />
  );
}

export default Home

