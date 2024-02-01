import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <FontAwesomeIcon icon={faLocationDot} />
      <FontAwesomeIcon icon={faHotel} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
}

export default App;
