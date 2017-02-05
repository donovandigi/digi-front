import { connect } from 'react-redux';

import Landing from '../components/Landing/Landing';
import { loginUser, registerUser } from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser({email, password})),
        registerUser: (email, password) => dispatch(registerUser({email, password}))
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.error
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);