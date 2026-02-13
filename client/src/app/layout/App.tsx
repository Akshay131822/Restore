import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";


function App() {



const [darkMode,setDarkmode]=useState(false);
const pallettype=darkMode?'dark':'light';
const theme = createTheme({
  palette : {
    mode:pallettype,
    background:{
      default:(pallettype==='light')?'#eaeaea':'#121212'}
  }})

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
 <Outlet/>
    </Container>
    </Box>
    </ThemeProvider>
  )
}

export default App
