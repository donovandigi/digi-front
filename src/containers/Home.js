import { connect } from 'react-redux';

import Home from '../components';
import {loginUser} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
        loginUser: loginUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);