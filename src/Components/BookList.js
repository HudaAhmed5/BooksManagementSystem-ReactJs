import React from "react";
import ButtonAppBar from "./ButtonAppbar";
import { useDispatch } from "react-redux";
import { useEffect,useState,useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookList } from "../redux/actions/bookAction";
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Waypoint } from 'react-waypoint';
const BookList = () => {
    const {query} =useParams()
    console.log("query is", query);
    const [page, setPage]=useState(1);
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log("BOOOOKLISt")
        dispatch(getBookList(query,page))
        // setPage(page+1);
      },[])
      
      const booklist= useSelector((state)=> state.allData.booklist);
      console.log("Booklist is",booklist)
      

      const onScroll=()=>{
        console.log('Scroll')
        setPage(page+1)
        dispatch(getBookList(query,page))
      }
    return ( 
        <>
        <div>
        <ButtonAppBar/>
        </div>
        <div  className="booklist">
           {booklist.map((data,index)=>{
                return (
                    <List>
                  <ListItem>
                    <ListItemText
                      primary={index + 1 + '- ' + data.books}
                    />
                  </ListItem>
                  <Divider
                    component='li'
                    sx={{
                      fontSize: '40px',
                      // width: 'auto',
                      fontWeight: 'bold'
                    }}
                  />
                </List>
                )
            })}
         <Waypoint onEnter={onScroll}>
         <Box sx={{ display: 'flex', alignItems:'center', alignSelf:'center' }}>
      <CircularProgress />
    </Box>
         </Waypoint>
        </div>
        </>
     );
}
 
export default BookList;