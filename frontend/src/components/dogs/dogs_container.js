import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';
import Dogs from './dogs';

const mapStateToProps = (state) => {
    return {
        dogs: Object.values(state.dogs.all),
        me: state.session.user.id 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(fetchDogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);