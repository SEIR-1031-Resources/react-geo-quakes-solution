import React,{useRef, useEffect, useState} from 'react'

const Marker = (options) => {
    const [marker, setMarker] = useState();
  
    useEffect(() => {
      if (!marker) {
        const newMarker = new window.google.maps.Marker()
        setMarker(newMarker);
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
   useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
    return null


  };

export default Marker