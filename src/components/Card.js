import React from "react";
import CardInfo from "./CardInfo";
function Card(props) {
  return (
    <div>
      <img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
    
        <CardInfo title={props.item.title} subTitle={props.item.subTitle} />
     
    </div>
  );
}

export default Card;
