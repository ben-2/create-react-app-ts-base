import React, { FunctionComponent } from "react";
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Props } from "./App.container";
import classes from "./App.module.css";

export const App: FunctionComponent<Props> = props => (
  <Grid container justify="center" className={classes.App}>
    <Fab onClick={props.increment}>
      <AddIcon />
    </Fab>
    <Fab disableRipple disableFocusRipple>
      {props.counter}
    </Fab>
    <Fab onClick={props.decrement}>
      <RemoveIcon />
    </Fab>
  </Grid>
);

export default App;
