import { withGoogleMap, 
        GoogleMap, 
        Marker, 
        DirectionsRenderer } from "react-google-maps"
import React from 'react';




class DogMap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // directions: null,
            places: []
        };
        this.mapMounted = this.mapMounted.bind(this);

    }


    componentDidMount() {
        const directionsService = new window.google.maps.DirectionsService();
        // const origin = { lat: 37.7989687, lng: -122.4024461 };
        console.log(this.props.latlong)
        const origin = {lat: parseInt(this.props.latlong.split(", ")[0]), lng: parseInt(this.props.latlong.split(", ")[1])}
        const destination = { lat: 37.7989687, lng: -122.404 }; 
        // need some logic to create destination 
        // const center = new window.google.maps.LatLng(origin); 
    
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                    
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
    }


    fetchPlaces(map) {
        const request = {
            location: origin,
            radius: "500",
            type: ["park"]
        };
        let service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const places = results.map((item, i) => {
                    return {
                        position: item.geometry.location,
                        id: i
                    };
                });
                this.setState({ places });
            }
        });
    }

    mapMounted(element) {
        const mapObject = element.context[window.MAP];
        this.fetchPlaces(mapObject);
    }




render(){
    


    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: 37.7989687, lng: -122.4024461 }}
            defaultZoom={13}>

            <Marker position={{ lat: 37.7989687, lng: -122.4024461 }}> 
            </Marker>

            <DirectionsRenderer
                directions={this.state.directions}/>

            {this.state.places.map(place => {
                return <Marker key={place.id} position={place.position} />;
            })}
            
        </GoogleMap>
    ));

    return (
        <div>
            <GoogleMapExample
                containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

}



export default DogMap