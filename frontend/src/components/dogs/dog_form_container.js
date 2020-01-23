import { connect } from 'react-redux';
import { composeDog } from '../../actions/dog_actions';
import DogForm from './dog_form';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newDog: state.dogs.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeDog: data => dispatch(composeDog(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);