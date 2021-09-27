import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import react, {useState} from 'react';
import getCenter from 'geolib/es/getCenter';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import Image from 'next/image'

function Map({searchResults}) {
    const defaultLocationObj = { long: 0}
    const [selectedLocation, setSelectedLocation] = useState (defaultLocationObj)

    const coordinates = searchResults.map(location => ({
        longitude: location.long,
        latitude: location.lat
    }));

    const mapCenter = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: mapCenter !== false ? mapCenter.latitude : 0,
    longitude: mapCenter !== false ? mapCenter.longitude : 0,
    zoom: 12
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/davidmood/cku1q9mew432q18s2cz4703pk"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            // onViewportChange={(nextViewport) => setViewport({nextViewport})}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
           {searchResults.map(result => (
               <div key={result.long}>
                   <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                   >    
                     <LocationMarkerIcon onClick={() => setSelectedLocation(result)} className="text-red-400 h-8 cursor-pointer hover:animate-bounce" />
                   </Marker>

                   {selectedLocation.long === result.long ? (
                       <Popup
                        onClose={() => setSelectedLocation(defaultLocationObj)}
                        closeButton={true}
                        closeOnClick={false}
                        latitude={result.lat}
                        longitude={result.long}
                       >
                            <div className="relative h-32 w-48 z-50">
                                <div className="top-0">
                                    <Image src={result.img} layout="fill" objectFit="cover"/>
                                </div>
                            </div>
                           {result.title}
                       </Popup>
                   ) : (false)}
               </div>
           ))} 
        </ReactMapGL>
    )
}

export default Map
