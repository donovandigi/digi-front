import { connect } from 'react-redux';

import Home from '../components/Home/Home';
import {logout, saveLoadDetails} from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        saveLoadDetails: (loadDetails) => dispatch(saveLoadDetails(loadDetails))
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        loads: state.loads.loads
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);