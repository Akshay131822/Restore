import { useEffect, useState } from "react"
import type { Product } from "../model/Product"
import Catalog from "../features/catalog/Catalog"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import Navbar from "./Navbar"


function App() {



const [product,setProduct]= useState<Product[]>([])
const [darkMode,setDarkmode]=useState(false);
const pallettype=darkMode?'dark':'light';
const theme = createTheme({
  palette : {
    mode:pallettype,
    background:{
      default:(pallettype==='light')?'#eaeaea':'#121212'}
  }})
useEffect(()=>{fetch('https://localhost:5001/api/product/').then(response  =>response.json()).then(data =>setProduct(data))}
,[])
const toggleDarkmode =
()=>{
  setDarkmode(!darkMode);
}


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Navbar toggleDarkmode = {toggleDarkmode} darkMode={darkMode}/>
    <Box sx={{
      minHeight:'100vh',
      background:darkMode? '#121212':'#eaeaea'   }}>
    <Container maxWidth='xl' sx={{mt:14}}>

 <Catalog  products ={product} />
    </Container>
    </Box>
    </ThemeProvider>
  )
}

export default App
