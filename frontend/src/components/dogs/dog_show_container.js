import { connect } from 'react-redux';

import { fetchDogs } from '../../actions/dog_actions';
import DogShow from './dog_show';

const mapStateToProps = (state, { match }) => {
    const dogId = parseInt(match.params.dogId);
    return {
        dogId,

    };
};

const mapDispatchToProps = dispatch => ({
    fetchDogs: () => dispatch(fetchDogs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DogShow);
