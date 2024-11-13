import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Loginpge from './Loginpge';
import Signup from './Signup';
import SimpleDialog from './SimpleDialog'; // Import SimpleDialog

function Homepage() {
  const [dialogOpen, setDialogOpen] = useState(null); // null, 'login', or 'signup'
  const [simpleDialogOpen, setSimpleDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleOpenDialog = (type) => {
    setDialogOpen(type);
  };

  const handleCloseDialog = () => {
    setDialogOpen(null);
  };

  const handleClickOpenSimpleDialog = () => {
    setSimpleDialogOpen(true);
  };

  const handleCloseSimpleDialog = (value) => {
    setSimpleDialogOpen(false);
    setSelectedValue(value);
  };

  return (
    <div style={styles.body}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 4, paddingRight: '200px', paddingTop:'5px'}}>
              <ListItemButton component="a" href="#home">
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton component="a" href="#categories">
                <ListItemText primary="Categories" />
              </ListItemButton>
              <ListItemButton component="a" href="#product">
                <ListItemText primary="Product" />
              </ListItemButton>
              <ListItemButton component="a" href="#about">
                <ListItemText primary="About Us" />
              </ListItemButton>
              <ListItemButton component="a" href="#contact">
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </Box>
            <Box style={{ gap: 2, display: 'flex' }}>
              <ListItemButton>
                <SearchIcon />
              </ListItemButton>
              <ListItemButton>
                <ShoppingCartIcon />
              </ListItemButton>
              <ListItemButton>
                <FavoriteIcon />
              </ListItemButton>
              <ListItemButton onClick={handleClickOpenSimpleDialog}>
                <PersonIcon />
              </ListItemButton>
            </Box>
            <Box style={{ paddingLeft: '150px' }}>
              <Button color="inherit" onClick={() => handleOpenDialog('login')}>Login</Button>
              <Button color="inherit" onClick={() => handleOpenDialog('signup')}>Sign up</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      
      {/* Dialog for Login */}
      <Dialog open={dialogOpen === 'login'} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Loginpge />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
      
      {/* Dialog for Signup */}
      <Dialog open={dialogOpen === 'signup'} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <Signup />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
      
      {/* Simple Dialog */}
      <SimpleDialog
        selectedValue={selectedValue}
        open={simpleDialogOpen}
        onClose={handleCloseSimpleDialog}
      />
      <Box style={styles.con}>
       <h1 style={{color:'Green',paddingLeft:'30px',textShadow: "3px 3px 4px black"}}>FreshCart.com</h1>
      </Box>
      
      `<Box style={{ display: 'flex', paddingLeft: 120 }}>
        <Card sx={{ maxWidth: 400, marginRight: 2, marginTop: 5, marginBottom: 10 }}>
          <CardActionArea>
            <CardMedia
              style={styles.cart1}
              component="img"
              height="200px"
              image="https://www.urbangroc.com/wp-content/uploads/2022/08/malta-orange.jpg"
              alt="Orange"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               ORANGE
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              fresho! Orange
MRP:
₹130.1
Price: ₹100.5
(₹100.5 / pc)
You Save:
36% OFF
(inclusive of all taxes)
              </Typography>
              <div style={styles.son}>
                <Button variant="contained">ADD TO CART</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        
        <Card sx={{ maxWidth: 400, marginRight: 2, marginTop: 5, marginBottom: 10 }}>
          <CardActionArea>
            <CardMedia
              style={styles.cart2}
              component="img"
              height="200px"
              image="https://www.jiomart.com/images/product/original/590000002/apple-red-delicious-1-kg-product-images-o590000002-p590000002-0-202203141903.jpg?im=Resize=(1000,1000)"
              alt="APPLE"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                APPLE
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              fresho! Apple(Loose), 1 kg
MRP:
₹251.51
Price: ₹200
(₹200 / kg)
You Save:
38% OFF
              </Typography>
              <div style={styles.son}>
                <Button variant="contained">ADD TO CART</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        
        <Card sx={{ maxWidth: 400, marginRight: 2, marginTop: 5, marginBottom: 10 }}>
          <CardActionArea>
            <CardMedia
              style={styles.cart3}
              component="img"
              height="200px"
              image="https://m.media-amazon.com/images/I/31cXlUcvRVL.jpg"
              alt="DHAL"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MANGO
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Have a fresh Mango
4
31471 Ratings & 496 Reviews

MRP:
₹150
Price: ₹120.75
(₹120.75 / kg)
You Save:
25% OFF
(inclusive of all taxes)
              </Typography>
              <div style={styles.son}>
                <Button variant="contained">ADD TO CART</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
}

const styles = {
 body:
 {
  backgroundColor:'#f7b6a8'
 },
  con: {
    backgroundColor:'blue',
    color: 'black',
    borderRadius: '8px',
    height: '350px',
    marginTop: '20px',
    width: '1300px',
    display: 'flex',
    marginLeft: '50px',
    backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/35/74/56/360_F_335745675_MaxYxSsadrviZdThITuHB2oCohYOiwEu.jpg")', // Replace with your image URL
    backgroundSize: 'cover', // Optional: Cover the entire box
    backgroundPosition: 'center', // Optional: Center the image
    backgroundRepeat: 'no-repeat'
  },
  son: {
    marginTop: '10px'
  },
  cart1: {
    width: '200px',
  margin:'80px'
  },
  cart2: {
    width: '200px',
    margin: '50px'
  },
  cart3: {
    width: '200px',
    margin: '50px'
  }
}

export default Homepage;
