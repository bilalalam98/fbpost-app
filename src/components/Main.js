import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Main.css';
import { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import TextField from '@mui/material/TextField';



function Main({like,comments}) {
    const [likes,setLikes] = useState(parseInt(like));

    


 const forlikes = ()=>{
  
   setLikes(likes + 1);

   }
  

   const buttons = [
    <Button   onClick={() => {forlikes()}}
     style={{width: '200px', height: '46px' ,borderColor:'white',fontSize:'18px',color:'black'  }}
     key="one"> <ThumbUpIcon style={{fontSize:'18px'}}/> &nbsp; Like </Button>,

    <Button style={{width: '200px', height: '46px',borderColor:'white',fontSize:'18px',color:'black'  }} 
    key="two"><ChatBubbleOutlineIcon style={{fontSize:'18px'}}/> &nbsp;Comment </Button>,

    <Button  style={{width: '200px', height: '46px',borderColor:'white',fontSize:'18px',color:'black'  }}
     key="three"> <ShareIcon style={{fontSize:'18px'}} />&nbsp; Share</Button>,
    
  ];
    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width:'100%',
            Height:'40px',
            '& > *': {
              m: 1,
            },
          }}
        >
            <div style={{borderBottom:'1px solid grey',display:'flex',justifyItems:'left'}}>
             <p style={{fontSize:'16px',fontWeight:'600'}}>{likes} likes,</p>
             <p style={{fontSize:'16px',fontWeight:'600'}}>{comments}comments,</p>
             <p style={{fontSize:'16px',fontWeight:'600'}}>0 shares</p>
            </div>
          <ButtonGroup style={{width:'100%'}} size="large" aria-label="large button group">
            {buttons}
          </ButtonGroup>
          
          <TextField id="outlined-basic" style={{backgroundColor:'#c9c7bd'}} label="Comment here" variant="outlined" />

        </Box>
      );
}

export default Main;