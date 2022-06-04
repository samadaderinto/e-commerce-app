import React from "react"
import { useLocation } from "react-router-dom";

const WithRouter =  function withLocation(Child) {
    return function WithRoute(props) {
      const location = useLocation();
      // other relevant props
      // ...
      return <Child {...props} location={location} />;
    };
  }

export default WithRouter;

