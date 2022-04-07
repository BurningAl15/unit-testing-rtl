import { useState } from 'react';
import {
  Grid,
  IconButton,
  Button,
  Typography,
} from '@mui/material/';

import { makeStyles } from '@mui/styles';
import {
  FaPlusCircle,
  FaMinusCircle
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  button: {
    fill: 'white',
  },
  text: {
    color: 'white',
    margin: '8px 8px !important'
  },
  center: {
    margin: 'auto !important',
  }
}));

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.center}>
        <IconButton data-testid="minus" onClick={() => setCount(count - 1)}>
          <FaMinusCircle className={classes.button} />
        </IconButton>
        <Typography data-testid="count" className={classes.text} variant="p">
          {count}
        </Typography>
        <IconButton data-testid="plus" onClick={() => setCount(count + 1)}>
          <FaPlusCircle className={classes.button} />
        </IconButton>
      </Grid>
      <Grid item xs={12} className={classes.center}>
        <Button data-testid="reset" variant="primary" onClick={() => setCount(0)}>
          <Typography className={classes.text} variant="p">
            Reset
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Counter;