import React, { StatelessComponent } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../store';

export const routerProvider: StatelessComponent = (props) => {
    return <ConnectedRouter history={history} children={props.children} />
}

export default routerProvider;