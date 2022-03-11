import React from "react";
import { flowercard } from "../mock";
import {
  Flowertypes,
  Flowerborder,
  Colorword,
  Mapflower,
  Imgmap,
} from "../Flowertypesbar/style";
export const Flowertypesbar = () => {
  return (
    <Flowertypes>
      <Flowerborder>
        <Colorword>Related Products</Colorword>
      </Flowerborder>
      <Mapflower>
        {flowercard.map((value) => {
          return <Imgmap key={value.id} src={value.item} alt={value.type} />;
        })}
      </Mapflower>
    </Flowertypes>
  );
};
export default Flowertypesbar;
