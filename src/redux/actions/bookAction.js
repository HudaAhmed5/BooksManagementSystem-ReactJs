import { ActionTypes } from "../contants/action-types";
import XMLParser from 'react-xml-parser';
import axios from "axios";

let ScanData;

export const gettingData = query=>dispatch =>{
    axios.get(`https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}`)
        .then(response=>{
          let jsonData=new XMLParser().parseFromString(response.data)
          let booksList=jsonData.children[1].children[6].children
          console.log('books are',booksList)
          ScanData=booksList.map(book=>{
            return {
              id:book.children[8].children[0].value,
              book:book.children[8].children[1].value,
              author: book.children[8].children[2].value
            }
          })
          dispatch({
            type:ActionTypes.SET_BOOKS,
            payload:ScanData
          })
        })
}


export const getSingleBook= id => dispatch =>{
  console.log('check id', id)
  axios.get(`https://www.goodreads.com/book/show/${id}?key=FtRVHgmjzjpzKjCt3SUMw`)
  .then(response=>{
    let jsonData=new XMLParser().parseFromString(response.data)
    console.log("json ",jsonData);
    let newBookList=jsonData.children[1].children
    console.log('newbooksList', newBookList)
    let booksDetail={
      book: newBookList[1],
      image: newBookList[8],
      average_rating: newBookList[18],
      publisher:newBookList[13],
      }
        console.log("bookDetail123",booksDetail)
        dispatch({
          type:ActionTypes.GET_SINGLE_BOOK,
          payload:booksDetail
        })
    })
}
export const getBookList= (query,page)=> dispatch => {
  console.log(query);
  axios.get(`https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}+&page=${page}`)
  .then(response=>{
    let jsonData=new XMLParser().parseFromString(response.data)
    console.log("json ",jsonData);
    let bookList= jsonData.children[1].children[6].children
    console.log("full list is",bookList)
    let bookslist=bookList.map(book=>{
   
      return {
        books:book.children[8].children[1].value
      } 
    })
    
    dispatch({
      type:ActionTypes.BOOK_LIST,
       payload: bookslist
    })
    
})
}




