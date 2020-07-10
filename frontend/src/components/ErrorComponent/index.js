import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import rem from "polished/lib/helpers/rem";

const ErrorPlaceholder = styled.div`
  width: ${rem("340px")};
  height: ${rem("52px")};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: red;
    text-align: center;
  }
`;


const ErrorComponent = (props) => {
    const {errorReducer: {error}} = props
    return (
        <ErrorPlaceholder><p>{error ? error : null}</p></ErrorPlaceholder>
    )
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        authReducer: state.authReducer,
        errorReducer: state.errorReducer,
    };
};

export default connect(mapStateToProps)(ErrorComponent);