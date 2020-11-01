import React, {useContext, useState, useEffect} from 'react';
import './Orgdashstyle.css';
import logo from './life-vest-logo3.jpg';
import Typing from 'react-typing-animation';
import {Web3Context} from '../../contexts/Web3Context';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    minWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

function Orgdash() {
  const classes = useStyles();
  const [Request, setRequest] = useState([]);
  const {ins} = useContext(Web3Context);

  async function fetchOrganisation() {
    if (ins.methods) {
      const totalReq = await ins.methods.totalRequest().call();
      console.log(totalReq);
      const promise = [];
      if (totalReq > 0) {
        for (let i = 0; i < totalReq; i++) {
          promise.push(ins.methods.request(i).call());
        }
        Promise.all(promise)
          .then((values) => {
            setOrgs(values);
          })
          .catch((err) => console.log(err));
      } else {
        setOrgs([]);
      }
    }
  }
  useEffect(() => {
    fetchOrganisation();
  }, [ins]);
  return (
    <div className="a">
      <div className="aa">
        <img src={logo} className="log"></img>

        <div className="ab">
          <Typing speed={150}>
            <span>Dashboard - Requirements</span>
          </Typing>
        </div>
      </div>

      <div className="ac">
        <Typing speed={150}>
          <span>
            <h1>Heart</h1>
          </span>
        </Typing>

        <div className="lista">
          <List className={classes.root}>
            <ListItem>
              <ListItemText primary="Age" secondary="19" />
            </ListItem>
            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Blood Group" secondary="A+" />
            </ListItem>
            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Name" secondary="qwwertyuj" />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText
                primary="Contact Detail"
                secondary="Mobile: 9512012151"
              />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="ID proof" secondary="Driving Liscence" />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Organ Required" secondary="Heart" />
            </ListItem>
          </List>

          <List className={classes.root}>
            <ListItem>
              <ListItemText primary="Age" secondary="19" />
            </ListItem>
            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Blood Group" secondary="A+" />
            </ListItem>
            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Name" secondary="qwwertyuj" />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText
                primary="Contact Detail"
                secondary="Mobile: 9512012151"
              />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="ID proof" secondary="Driving Liscence" />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Organ Required" secondary="Heart" />
            </ListItem>
          </List>

          <List className={classes.root}>
            <ListItem>
              <ListItemText primary="Age" secondary="19" />
            </ListItem>
            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Blood Group" secondary="A+" />
            </ListItem>
            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Name" secondary="qwwertyuj" />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText
                primary="Contact Detail"
                secondary="Mobile: 9512012151"
              />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="ID proof" secondary="Driving Liscence" />
            </ListItem>

            <Divider component="li" />
            <li></li>
            <ListItem>
              <ListItemText primary="Organ Required" secondary="Heart" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Orgdash;
