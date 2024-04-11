import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ResponsiveAppBar from '../components/appbar';
import Cards from '../components/card';

export default function Home() {
  return (<div>
    <ResponsiveAppBar />
    <div>
    <Cards/>
        
    </div>
    
    </div>
  );
}
