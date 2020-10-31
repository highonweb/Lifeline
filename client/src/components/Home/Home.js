import React,{useContext} from 'react'
import './homeStyle.css'
import logo from './life-vest-logo3.jpg'
import Typing from 'react-typing-animation';
import img_a from './image1.jpg'
import img_b from './image2.jpg'
import img_c from './image3.jpg'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


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

function Home (){
    const classes = useStyles();

    return(
        <div className="a">
          
          <div className="aa">
              <div className="aaa">
              
                <img src={logo} className="log"></img>
              
              </div>
          </div>

          <div className="ab">

          <Typing speed={120}>              
              <span>LifeVest - Save and Donate Life</span>          
          </Typing>

          </div>

          <hr></hr>

          <div className="ac">
 
             <div className="aca">

              <Card className="details">

                <CardMedia
                   image= {img_a} className={classes.media} />

          <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Our mission is to assist millions of patients with deficient organs around the world by safely giving them access to organs from drivers deceased in traffic accidents and assisting the families of the deceased through this everyone wins ecosystem.
        </Typography>
      </CardContent>

              </Card>

              <div className="movingd">

              <Typing speed={120}>              
              <span>Mission</span>          
              </Typing>
                     
              </div>

              </div>

              <div className="acb">

              <div className="movingd">

              <Typing speed={120}>              
              <span>Vision</span>          
              </Typing>
                     
              </div>
              
              
              <Card className="details" style={{marginLeft: '15vw'}}>

                <CardMedia
                   image= {img_b} className={classes.media} />

          <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Our vision is to become an organ bank transparent and 100% verified spreading life and happiness to humanity.
        </Typography>
      </CardContent>

              </Card>

              </div>

              <div className="acc" >


              <Card className="details">

                <CardMedia
                   image= {img_c} className={classes.media} />

          <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Our focus is to fund future tech developments to increase the validity of organs in transit to allow for global exchange and eradicate organ failure deaths.
        </Typography>
      </CardContent>

              </Card>

              <div className="movingd">

              <Typing speed={120}>              
              <span>Our Focus</span>          
              </Typing>
                     
              </div>

              </div> 

          </div>

        </div>
    );
};

export default Home;