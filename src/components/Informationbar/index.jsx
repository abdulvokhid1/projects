import React from "react";

import {
  Review,
  Reviewpro,
  Reviewnum,
  Information,
  Text1,
  Text2,
  Text3,
  Livingroom,
  Diningroom,
  Office,
  Text4,
} from "../Informationbar/style";

export const Informationbar = () => {
  return (
    <Information>
      <Review>
        <Reviewpro>Product Description</Reviewpro>
        <Reviewnum>Reviews(19)</Reviewnum>
      </Review>
      <Text1>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
        cursus eu, suscipit id nulla.
        <br />
        <br />
        <br /> Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
        feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus
        ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
        vulputate, sapien libero hendrerit est, sed commodo augue nisi non
        neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
        accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
        luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
        euismod eget. The ceramic cylinder planters come with a wooden stand to
        help elevate your plants off the ground.
      </Text1>

      <Livingroom>Living Room :</Livingroom>
      <Text2>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Text2>
      <Diningroom>Dining Room:</Diningroom>
      <Text3>
        The benefits of houseplants are endless. In addition to cleaning the air
        of harmful toxins, they can help to improve your mood, reduce stress and
        provide you with better sleep. Fill every room of your home with
        houseplants and their restorative qualities will improve your life.
      </Text3>
      <Office>Office:</Office>
      <Text4>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Text4>
    </Information>
  );
};
export default Informationbar;
