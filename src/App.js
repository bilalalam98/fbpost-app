import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Head from './components/Head';
import Pictures from './components/pictures/Pictures';
import Main from './components/Main';
import NavBar from './components/NavBar.js';
import { useState } from 'react';
import { display } from '@mui/system';
import ProfilePic1 from './images/ProfilePic.PNG'
import ProfilePic2 from './images/ProfilePic2.PNG'
import ProfilePic3 from './images/ProfilePic3.PNG'
import pic1 from './components/pictures/pic1.PNG'
import pic2 from './components/pictures/pic2.PNG'
import pic3 from './components/pictures/pic3.PNG'
import pic4 from './components/pictures/pic4.PNG'
import pic5 from './components/pictures/pic5.PNG'
import pic6 from './components/pictures/pic6.PNG'
import pic7 from './components/pictures/pic7.PNG'
import pic8 from './components/pictures/pic8.PNG'
import pic9 from './components/pictures/pic9.PNG'
import pic10 from './components/pictures/pic10.PNG'
import pic11 from './components/pictures/pic11.PNG'
import pic12 from './components/pictures/pic12.PNG'
import pic13 from './components/pictures/pic13.PNG'
import pic14 from './components/pictures/pic14.PNG'
import pic15 from './components/pictures/pic15.PNG'

function App() {



  
 



  return (
    <div className="App">
       <NavBar/>
      <header className="App-header">
     
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        
        '& > :not(style)': {
          m: 1,
          width: 628,
          height: 'auto',  
          borderRadius:3
        },
      }}
    >
      
     
     
      <div style={{display:'flex', flexWrap: 'wrap',flexDirection:'column'}}>
      <Paper style={{padding:'5px'}} elevation={5}>
      <Head  avatar={ProfilePic1} createdby='Muhammad Bilal Alam' Description='Once you replace negative thoughts with positive ones, youll start having positive results. 🧐'
       createdat={Date(Date.now())} />
      <div style={{width:'616px',margin:'0 auto',borderBottom:'1px solid grey'}}>
      <Pictures Img={[pic7,pic4,pic6,pic8,pic9,pic10,pic3,pic11]}  />
      </div>
      <Main like='170' comments='2' />
      </Paper>
     


       <br />


       
      <Paper style={{padding:'5px'}} elevation={5}>
      <Head  avatar={ProfilePic2} createdby='Hassan Ahmed Khan' Description='I would rather walk with a friend in the dark, than alone in the light ...' 
      createdat={Date(Date.now())}/>
      <div style={{width:'616px',margin:'0 auto',borderBottom:'1px solid grey'}}>
      <Pictures Img={[pic5,pic1,pic9,pic15,pic13]}  />
      </div>
      <Main like='50' comments='8'/>
      </Paper>



      
      <br />


       
            <Paper style={{ padding: '5px' }} elevation={5}>
              <Head avatar={ProfilePic3} createdby='Muhammad Muneer Alam' Description='Happy Birthday dear brother may you have many many more🎁🎂' 
      createdat={Date(Date.now())}/>
              <div style={{ width: '616px', margin: '0 auto', borderBottom: '1px solid grey' }}>
                <Pictures Img={[pic2,pic7,pic10,pic12,pic14]}  />
              </div>
              <Main like='90' comments='4' />
            </Paper>

      </div>

    
      
    </Box>
    <br />  
      </header>
     
    </div>
  );
}

export default App;
