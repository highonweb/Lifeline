import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Web3Context} from '../../contexts/Web3Context';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './Navstyle.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  // const {web3, ins, accts} = useContext(Web3Context);

  return (
    <AppBar position="static" className="bar">
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          <Button color="inherit" className="text">
            <Link className="link" to="/">
              Life Vest
            </Link>
          </Button>
        </Typography>
        <Button color="inherit" className="text">
          <Link className="link" to="/donate">
            Donate
          </Link>
        </Button>
        <Button color="inherit" className="text">
          <Link className="link" to="/inventory">
            Inventory
          </Link>
        </Button>
        <Button color="inherit" className="text">
          <Link className="link" to="/organisations">
            Organisations
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
