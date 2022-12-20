import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./Style.css";
import img1 from "./iot.png";
const Common = () => {
  return (
    <div className="cards">
      <Card2
        claa="sk "
        cardhead="firstdiv"
        number="01"
        pic={img1}
        title="Introducing AI to children in an age appropriate manner"
      />
      <Card1
        claa="num2 "
        cardhead="seconddiv"
        number="02"
        pic={img1}
        title="Gain awareness on AI and build an Interactive story around it"
      />
      <Card2
        claa="num3 "
        cardhead="thirddiv"
        number="03"
        pic={img1}
        title="Accquire programming skills in a user-friendly format"
      />
      <Card1
        claa="num4 "
        cardhead="fourthdiv"
        number="04"
        pic={img1}
        title="Explore to mini projects on diverse topics"
      />
      <Card2
        claa="num5 "
        cardhead="fifthdiv"
        number="05"
        pic={img1}
        title="Train the teachers programme"
      />
    </div>
  );
};

export default Common;
