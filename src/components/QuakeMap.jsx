import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useRef, useEffect, useState } from "react";
import Marker from "./Marker";

const QuakeMap = ({ children, quakes,center, zoom }) => {
  const ref = useRef();
  const [marker, setMarker] = useState(quakes || []);
  const [map, setMap] = useState()
  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, {
      center,
      zoom,
    }));
  }, []);
  
  return (
    <>
      <div ref={ref} id="map" />
      {React.Children?.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      },ref)}
    </>
  );
};



const MyApp = (props) => {
  const render = (status) => {
        switch (status) {
          case Status.LOADING:
            return <h2>...Loading</h2>;
          case Status.FAILURE:
            return <h2>Error</h2>;
          case Status.SUCCESS:
            return (
              <QuakeMap zoom={2} center={{ lat: 30.266666, lng: -97.73333 }} quakes={props.quakes}>
                {props.quakes?.map(quake=>{
                    const lat = quake.geometry.coordinates[0]
                    const lng = quake.geometry.coordinates[1]
                   const position = {
                    lat,lng
                   } 
                return <Marker
                 key={lat+lng}
                  position={position}
                  style={{ border: "1px solid red" }}
                />})}
                
              </QuakeMap>
            );
          default:
            return null;
        }
      };
  return (<Wrapper apiKey={process.env.REACT_APP_API_KEY} render={render} />)
}
;

export default MyApp;
