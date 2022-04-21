import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModalBox from './ModalBox';
import "../index.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function ShoppingCart({handleCheckOut, cartObject, shoppingCartShoes, shoppingCartShirts, shoppingCartPants, handleDeleteClick}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function runTotals() {  
    let shoes = shoppingCartShoes.reduce((a, b) => a + b.price, 0)
    let shirts = shoppingCartShirts.reduce((a, b) => a + b.price, 0)
    let pants =shoppingCartPants.reduce((a, b) => a+ b.price, 0)
    return shoes + shirts + pants
  }

  let pantsCount=0
  let shoesCount=0
  let shirtsCount=0
  function totalItemsInCart() {
    pantsCount = shoppingCartPants.length;
    shoesCount = shoppingCartShoes.length;
    shirtsCount = shoppingCartShirts.length;
    return pantsCount + shoesCount + shirtsCount
  }

  let totalItems = totalItemsInCart()
  let total = runTotals()
  const shirtMap = cartObject.map(purchase => {
    // console.log(purchase.name)
    return <div ><h4>{purchase.shoe?.name || purchase.shirt?.name || purchase.pant?.name}</h4><h5>{purchase.shoe?.description || purchase.shirt?.description || purchase.pant?.description}</h5><Button sx={{bgcolor: "#464E2E"}} id={purchase.id} onClick={handleDeleteClick} variant="contained">Delete</Button> </div>
  })
  return (
    
    <Grid id="gridStuff"container sx={{p: '1rem'}}>
        <Grid item xs={3} sx={{px: .5, py: .5}}>
          <Paper sx={{ background: "rgba(0,0,0,0.5)", height: '10rem'}}>
            <h2 id="shoppingCartCheckOut">Shopping Cart</h2>
            <br/>
            <h7 id="cartOne" >Total # Shirts: {shirtsCount}  </h7>
            <br/>
            <h7 id="cartOne" >Total # Pants: {pantsCount}  </h7>
            <br/>
            <h7 id="cartOne" >Total # Shoes: {shoesCount}  </h7>
            <br/>
            <h7 id="cartOne" >Total Items: {totalItems}  </h7>
            <br/>
            <h7 id="cartOne" >Total $: {total}.00  </h7>
            <br/>
            {/* <Button onClick={handleCheckOut} variant="contained" sx={{bgcolor: "#464E2E"}}>Checkout</Button> */}
            <div>
              <Button onClick={handleOpen}>Checkout</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                      <Button onClick={handleCheckOut} variant="contained" sx={{bgcolor: "#464E2E"}}>Complete Purchase</Button>
                  </Box>
                </Modal>
            </div>
          </Paper>
        </Grid>  
        <Grid item xs={9} sx={{px: 1, py: .5}}>
          <Paper sx={{ background: "rgba(0,0,0,0.5)", height: '10rem'}}>
              <div class="scroll" style={{display: 'flex'}}>
                {shirtMap}
              </div>
          </Paper>  
        </Grid>
    </Grid>
  )

}

export default ShoppingCart