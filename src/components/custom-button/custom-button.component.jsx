import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <CustomButtonContainer
    inverted={inverted}
    isGoogleSignIn={isGoogleSignIn}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
