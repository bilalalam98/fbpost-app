import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AvaImg from './AvaImg';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding:  theme.spacing(1),
  textAlign: 'start',
  marginBottom:'0 px',
  color: theme.palette.text.secondary,
  boxShadow:'none'
}));


export default function Head({avatar,createdby,createdat,Description}) {
  return (
    

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}  >
        <Grid item xs={2} >
          <Item > <AvaImg avatar={avatar} />  </Item>
        </Grid>
        <Grid item xs={10}>
          <Item style={{paddingLeft: '2px',
  paddingTop:'15px',
  textAlign: 'start',}}>
              <a style={{fontSize:'23px',fontWeight:'600',color:'#063b71',textDecoration:'none'}} >{createdby}</a>
              <br/>
              <a style={{fontSize:'13px',fontWeight:'600',color:'gray',textDecoration:'none'}} >{createdat} </a>
          </Item>
        </Grid>
      </Grid>
      
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Item style={{
  padding:'10px',
  textAlign: 'start',}}>
              <a style={{fontSize:'15px',fontWeight:'500',color:'black',textDecoration:'none'}} >{Description}</a>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
