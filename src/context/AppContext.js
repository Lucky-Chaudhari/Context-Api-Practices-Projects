import { createContext} from "react";
import { baseUrl } from "../baseUrl";
import {useState} from 'react';



//Step 1

export const AppContext = createContext();


export default  function AppContextProvider({children})  {

  const [loading,setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page,setPage] = useState(1);
  const[totalPages, setTotalPages] = useState(null);

//data filling pending
async function fetchData(page = 1) {
  setLoading(true);
    let url =`${baseUrl}?page=${page}`;
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setPage(data.page);
    setPosts(data.posts);
    setTotalPages(data.totalPages)

  } catch (error) {
   console.log('erron in fetching data');
   setPage(1);
   setPosts({});
   setTotalPages(null);
  }
setLoading(false)

}
function handlePageChange(page=1) {
  setPage(page);
  fetchData(page);
}


  const value = {
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    fetchData,
    handlePageChange
  };
  //Step 2

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>;
}