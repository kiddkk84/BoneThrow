import { connect } from 'react-redux';

import { fetchDogs } from '../../actions/dog_actions';
import DogShow from './dog_show';

const mapStateToProps = (state, { match }) => {
    const dogId = match.params.dogId;
    return {
        dogId,
        dogs: Object.values(state.dogs.all)

    };
};

const mapDispatchToProps = dispatch => ({
    fetchDogs: () => dispatch(fetchDogs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DogShow);