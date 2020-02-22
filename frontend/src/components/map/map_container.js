import { connect } from 'react-redux';

import { fetchDogs, changeDog } from '../../actions/dog_actions';
import DogMap from './dog_map'

const mapStateToProps = (state, ownProps) => {
    const { recommendation } = ownProps
    return {
        dogs: Object.values(state.dogs.all),
        newDog: state.dogs.new,
        latlong: state.session.user.latlong,
        recommendation: recommendation
    };
};

const mapDispatchToProps = dispatch => ({
    fetchDogs: () => dispatch(fetchDogs()),
    changeDog: (dogId, data) => dispatch(changeDog(dogId, data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DogMap);


