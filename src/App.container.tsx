import App from './App';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { increment, decrement } from './store/counter'
import { AppState } from './store';

export interface Props {
    counter: number;
    increment: typeof increment
    decrement: typeof decrement
}

const mapStateToProps = (state: AppState) => ({
    counter: state.counter.counter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

