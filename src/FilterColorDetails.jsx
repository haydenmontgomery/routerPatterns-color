import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ColorDetail from "./ColorDetail";

function FilterColorDetails({ colors }) {
  const { name } = useParams();
  const navigate = useNavigate();

  if (name) {
    const currentColor = colors.find(color => color.name.toLowerCase() === name.toLowerCase());
    console.log(currentColor, "FilterColor")
    return <ColorDetail color={currentColor} />;
  }


  return navigate(-1);
}

export default FilterColorDetails;