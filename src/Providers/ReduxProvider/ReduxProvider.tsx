import React, { FunctionComponent } from 'react';
import {Provider} from 'react-redux';
import store from '../../store';

export const reduxProvider: FunctionComponent = (props) => {
    return <Provider store={store} children={props.children}/>
}

export default reduxProvider;