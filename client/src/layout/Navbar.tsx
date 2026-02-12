import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
type Props=
{
  toggleDarkmode: ()=>void,
  darkMode:boolean

}
export default function Navbar({toggleDarkmode,darkMode}:Props) {

  return (
    <AppBar position='fixed' >
      <Toolbar>
      <Typography variant='h6'>
        Re-Store
      </Typography>
      <IconButton onClick={toggleDarkmode}>
        {darkMode? <DarkMode/>:<LightMode sx={{color:'yellow'}}/>}
      </IconButton>
      </Toolbar>
      
    </AppBar>
  )
}