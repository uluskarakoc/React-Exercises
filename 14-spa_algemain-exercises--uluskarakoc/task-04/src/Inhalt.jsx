import React from "react";
import { useContext } from "react";
import { PrüfungContext } from "./Context";

function Inhalt() {
  const { name, setName, location, setLocation } = useContext(PrüfungContext);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeLocation = (e) => setLocation(e.target.value);
  return (
    <div>
      <label htmlFor="name">Uptade name</label>
      <input type="text" name="name" value={name} onChange={onChangeName} />
      <br />
      <label htmlFor="location">Uptade Location</label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={onChangeLocation}
      />

      <h2>Name:{name}</h2>
      <h2>Location:{location}</h2>
    </div>
  );
}

export default Inhalt;
