import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/actions/loginAction";

 function ButtonAppBar() {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.userData.user)
 
  const navigate= useNavigate();
   const logOut=()=> {
    dispatch(setUser(null));
    navigate('login')
    
   }
  // const fromLogout = () =>{
  //   localStorage.setItem('fromLogin',false)
  //     navigate('login') 
  // }
  return (
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jazza Book Search
          </Typography>
    
          {user&&user.email?
             <Button onClick={()=>{logOut()}} color="inherit">LogOut</Button>:
             <Button onClick={()=>{logOut()}} color="inherit">LogIn</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;