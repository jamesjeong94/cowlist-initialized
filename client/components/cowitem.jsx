import React from "react";

const CowItem = (props) => {
  return (
    <p>
      {props.cowData.name}
      {props.cowData.description}
    </p>
  );
};

export default CowItem;
