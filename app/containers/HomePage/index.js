import { connect } from 'react-redux';
import { compose } from 'redux';

// import { loadMovies } from '../App/actions';
// import getMovies from './reducer';
import HomePage from './HomePage';
import {changeSearchValue, getMovies} from "./actions";

const prefix = 'HomePage';

console.log('!!!');
// getMovies();
const mapDispatchToProps = (dispatch) => ({
    onChangeSearchValue: (e) => {
        console.log('here');
        dispatch(changeSearchValue(e.target.value))
    },
    onSubmitForm: (e) => {
        if (e !== undefined && e.preventDefault) e.preventDefault();
        //dispatch(loadMovies());
    }
});

function mapStateToProps (state) {
    const {movies} = state;
    return { moviesList: movies }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(withConnect)(HomePage);
//export { mapDispatchToProps };
