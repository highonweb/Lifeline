import React from 'react'
import './listOrgansStyle.css'
import logo from './life-vest-logo3.jpg'
import Typing from 'react-typing-animation';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import img_a from './organ1.jpg'
import img_b from './organ2.jpg'
import img_c from './organ3.jpg'
import img_d from './organ4.jpg'
import img_e from './organ5.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    maxWidth:'100%',
    height:300,
    paddingTop: '5%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function listOrg() {

  const classes = useStyles();

     return(

        <div className='a'>

          <div className='aa'>

            <img src={logo} className='log'></img>

            <div className='ab'>
            <Typing speed={120}>              
              <span>Available Organs</span>          
            </Typing>
            </div>

          </div>

          <div className='listoforgans'>

          <Card className="details">

<CardMedia
   image= {img_a} className={classes.media} />

<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
   <div className='insidecard'>
         
         <div className='organ'>
               Eye
         </div>

         <div className='number'>
               Available: 10
         </div>

   </div>
</Typography>
</CardContent>

</Card>



<Card className="details">

<CardMedia
   image= {img_b} className={classes.media} />

<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
   <div className='insidecard'>
         
         <div className='organ'>
               Kidney
         </div>

         <div className='number'>
               Available: 10
         </div>

   </div>
</Typography>
</CardContent>

</Card>



<Card className="details">

<CardMedia
   image= {img_c} className={classes.media} />

<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
   <div className='insidecard'>
         
         <div className='organ'>
               Heart
         </div>

         <div className='number'>
               Available: 10
         </div>

   </div>
</Typography>
</CardContent>

</Card>



<Card className="details">

<CardMedia
   image= {img_d} className={classes.media} />

<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
   <div className='insidecard'>
         
         <div className='organ'>
               Lungs
         </div>

         <div className='number'>
               Available: 10
         </div>

   </div>
</Typography>
</CardContent>

</Card>



<Card className="details">

<CardMedia
   image= {img_e} className={classes.media} />

<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
   <div className='insidecard'>
         
         <div className='organ'>
               Liver
         </div>

         <div className='number'>
               Available: 10
         </div>

   </div>
</Typography>
</CardContent>

</Card>

          </div>

        </div>

     );

};

export default ListOrg;