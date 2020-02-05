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
        const origin = {lat: parseFloat(this.props.latlong.split(", ")[0]), lng: parseFloat(this.props.latlong.split(", ")[1])}
        // const destination = { lat: 37.7989687, lng: -122.404 }; 
        // need some logic to create destination 
        const center = new window.google.maps.LatLng(origin); 

        // 37 N latitude a diff of 1 deg longitude is 89 km, 122 W longitude a diff of 1 deg latitude is 111 km
        // 55.3 miles, 68.9 miles
        // assume: all users are in san francisco

        // uniform disk point picking calc 
        // lazy calc is x = r^.5 cos(theta) y = r^.5 sin(theta) where theta is [0, 2 pi] and r is element of [0, distance to walk] 
        // i think just always choose r = recmmmended distance
        // assume straight lines -- no way for me to handle curves and loopy long things-- we just walk a straight radii
        let randomAngle = Math.random() * 2 * Math.PI
        // console.log(this.props.recommendation.props.children[0])
        let distance = this.props.recommendation.props.children[0]
        // const destination = {lat: 37.79 , lng: -122.404}
        const destination = {lat: (Math.sqrt(distance)*Math.cos(randomAngle)/ 68.9) + origin[`lat`],
            lng: (Math.sqrt(distance) * Math.sin(randomAngle) / 55.3) + origin[`lng`]}
        console.log(distance)
        console.log(destination)        
        console.log(origin)
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