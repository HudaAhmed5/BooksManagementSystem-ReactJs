import React from "react";
import ButtonAppBar from "./ButtonAppbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { getSingleBook } from "../redux/actions/bookAction";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
const Books = () => {

    const {id} = useParams()
    // console.log("ids ",id)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getSingleBook(id))
      },[])

      const singleBook= useSelector((state)=> state.allData.singleBook);
      console.log("singlebook list is ",singleBook)
    return ( 
        <>
        <div className="bookdetails">
            <ButtonAppBar/>
            </div>
             <div className="container">
                <p>{singleBook.book?.value}</p>
        </div>
       <div className="imgdiv">
        <img src={singleBook.image?.value} />
        </div>
        <div className="ratingdiv">
                <p>Avg rating: {singleBook.average_rating?.value}</p>
                <p>Publisher: {singleBook.publisher?.value}</p>
            </div> 
        </>
     );
}
 
export default Books;