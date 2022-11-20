import ButtonAppBar from "./ButtonAppbar";
import grimg from "../assets/img.jpg";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { gettingData } from "../redux/actions/bookAction";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
const Home = () => {
 const [query, setQuery]=useState(null);
  const books= useSelector((state)=> state.allData.books);
  const user=useSelector((state)=>state.userData.user);
  const navigate= useNavigate();
  const dispatch=useDispatch();

      useEffect(()=>{
        console.log("user",user) 
      },[user])


  
  const handleClick=()=> {
    // e.preventDefault()
    if(user&& user.email){
    navigate(`/booklist/${query}`)
    }
    else {
      navigate(`login`)
    }
    console.log(query);
  }
  const handleBoxChange=(e,data)=> {
   console.log(e,data)
    navigate(`/book/${data.id}`);
  }
  const handleChange =(e)=> {
    let input= e.target.value
    setQuery(input)
    dispatch(gettingData(query))
  }
  return ( 
  <Box className="homediv">
    < ButtonAppBar />
    <img src= {grimg} alt="goodreadimg"/>
    <Box className="srchdiv">
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 700 }}
      options={books}
      autoHighlight
      onChange={handleBoxChange}
      getOptionLabel={(option) => option.book}
      renderOption={(props, option) => (
        <Box  component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        ({option.book})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="GoodReads Search"
          onChange={handleChange}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )} 
      />
      <button onClick={handleClick}>Search</button>
  </Box>
  </Box>  
  );
}
export default Home;
