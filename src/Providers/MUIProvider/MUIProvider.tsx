import React, { StatelessComponent } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

export const muiProvider: StatelessComponent = (props) => {
    return <MuiThemeProvider theme={theme} children={props.children} />
}

export default muiProvider;