import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_KEY } from "../../config";

// 151.20929, -33.86882
export default function MapCard({ ad }) {
  const defaultProps = {
    center: {
      lat: ad?.location?.coordinates[1],
      lng: ad?.location?.coordinates[0],
    },
    zoom: 11,
  };
  const renderMarkers=(map, maps)=> {
    let marker = new maps.Marker({
      position: defaultProps.center,
      map,
      title: ad?.address
    });
  }

  if (ad?.location?.coordinates?.length) {
    return (
      <div style={{ width: "100%", height: "350px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
         
          
        </GoogleMapReact>
      </div>
    );
  }
}
/**
 * return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
 */
