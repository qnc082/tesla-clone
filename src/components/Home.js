import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        Description="Order Online for Touchless Delivery"
        Img="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model Y"
        Description="Order Online for Touchless Delivery"
        Img="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model 3"
        Description="Order Online for Touchless Delivery"
        Img="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model X"
        Description="Order Online for Touchless Delivery"
        Img="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        Description="Money Back Gurantee"
        Img="solar-panel.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Solar Panel for new Roof"
        Description="Money Back Gurantee"
        Img="solar-roof.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Accessories"
        Description=""
        Img="accessories.jpg"
        leftButtonText="Order Now"
      />
    </Container>
  );
}
const Container = styled.div`
  text-align: center;
`;
export default Home;
