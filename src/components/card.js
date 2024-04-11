import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useNavigate } from "react-router-dom";
export default function Cards(){
  
  var navigate=useNavigate()
   return(
    <div style={{ background: '#f1f2f6', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      

    <div style={{ display: 'flex', gap: '16px' }}>
      <Card sx={{ width: 420 ,borderRadius:25,  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.2)'}}>
        <div>
          <Typography level="title-lg">Chat Bot</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <Button
            
            size="md"
            color="primary"
            onClick={ (event)=>navigate('/chat')}
            fullWidth
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600,background:'#686de0' }}
          >
            USE
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ width: 420,borderRadius:25,  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.2)', background:'#686de0'}}>
        <div>
          <Typography level="title-lg" style={{ textAlign: 'center',color:'#ffff'}}>IMAGE PREDICTOR</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
        <Button
  variant="solid"
  size="md"
  color="primary"
  fullWidth
  onClick={ (event)=>navigate('/img')}
  aria-label="Explore Bahamas Islands"
  sx={{
    ml: 'auto',
    alignSelf: 'center',
    fontWeight: 700,
    background: '#ffff',
  }}
  style={{ color: '#686de0' }} // Change text color to #686de0
>
  OPEN
</Button>
        </CardContent>
      </Card>
    </div>
  </div>
   )
}