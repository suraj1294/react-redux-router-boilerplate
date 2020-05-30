import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoaderExampleText = () => (
  <div style={{ position: "absolute", top: 0, width: "100%", height: "100%" }}>
    <Dimmer active inverted>
      <Loader>Loading</Loader>
    </Dimmer>
  </div>
);

export default LoaderExampleText;
