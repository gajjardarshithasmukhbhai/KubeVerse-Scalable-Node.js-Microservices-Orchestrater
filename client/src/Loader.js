import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Spinner = () => {

    return (
        <PropagateLoader
            color={"rgb(0,123,255)"}
            loading={true}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}
export default Spinner;