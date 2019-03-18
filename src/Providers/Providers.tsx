import React, { StatelessComponent } from 'react';
import RouterProvider from './RouterProvider';
import ReduxProvider from './ReduxProvider';
import MUIProvider from './MUIProvider';

export const providers: StatelessComponent = props => {
    return(
        <ReduxProvider>
            <RouterProvider>
                <MUIProvider>
                    {props.children}
                </MUIProvider>
            </RouterProvider>
        </ReduxProvider>

    )
}

export default providers