import { connect } from 'react-redux';

import Home from '../components/Home/Home';
import {logout} from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);