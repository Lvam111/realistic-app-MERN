import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GOOGLE_PLACES_KEY } from "../../config";
import Sidebar from "../nav/Sidebar";
export default function AdForm({ action, type }) {
  // state
  const [ad, setAd] = useState({
    photos: [],
    uploading: false,
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    carpark: "",
    landsize: "",
    type: "",
    title: "",
    description: "",
    loading: false,
  });
  return (
    // <>
    //   <div className="mb-3 form-control">
    //     <GooglePlacesAutocomplete
    //       apiKey={GOOGLE_PLACES_KEY}
    //       apiOptions="au"
    //       selectProps={{
    //         defaultInputValue: ad?.address,
    //         placeholder: "Search for address..",
    //         onChange: ({ value }) => {
    //           setAd({ ...ad, address: value.description });
    //         },
    //       }}
    //     />
    //   </div>

    //   <pre>{JSON.stringify(ad, null, 4)}</pre>
    // </>
    <div>
      <h1 className="display-1 bg-primary text-light p-5">{action} {type}</h1>
      <Sidebar />
      <div className="container mt-2">
      <div className="mb-3 form-control">
         <GooglePlacesAutocomplete
           apiKey={GOOGLE_PLACES_KEY}
           apiOptions="au"
           selectProps={{
             defaultInputValue: ad?.address,
             placeholder: "Search for address..",
             onChange: ({ value }) => {
               setAd({ ...ad, address: value.description });
            },
           }}
         />
       </div>

       <pre>{JSON.stringify(ad, null, 4)}</pre>
      </div>
    </div>
  );
}
