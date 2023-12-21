import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spanner.styles";

function WithSpinner(WrappedComponent){
  function Spinner({ isLoading, ...otherProps}){
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  }
  return Spinner
}

export default WithSpinner;
