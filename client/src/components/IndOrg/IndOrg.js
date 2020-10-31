import React from 'react'
import './indOrgstyle.css'
import logo from './life-vest-logo3.jpg'
import Typing from 'react-typing-animation';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Heart', 'A+', 'Chennai', 'casbin', 4.0),
    createData('Heart', 'B+', 'Banglore', 'casbin', 4.3),
    createData('Heart', 'AB+', 'Calcutta', 'casbin', 6.0),
    createData('Heart', 'o+', 'Delhi', 'casbin', 4.3),
    createData('Heart', 'B-', 'Mumbai', 'casbin', 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
      maxWidth: '100%',
    },
  });

  function IndOrg() {

    const classes = useStyles();

    return(

          <div className='a'>

               <div className='aa'>

               <img src={logo} className='log'></img>

                 <div className='ab'>
                    <Typing speed={300}>              
                      <span>Heart</span>          
                    </Typing>
                 </div>

               </div>

               <div className='ab'>

               <TableContainer component={Paper} style={{width:'80%'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ORGAN</StyledTableCell>
            <StyledTableCell align="right">Blood Group</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Organisation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

               </div>

          </div>

    );
  };

  export default IndOrg;