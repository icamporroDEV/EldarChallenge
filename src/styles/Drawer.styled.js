import styled from '@emotion/styled';
import {
    Box as NSBox,
  Typography as NSTypography,
  AppBar as NSAppBar,
  List as NSList,
  Drawer as NSDrawer,
  Button as NSButton
} from '@mui/material';


export const AppBarStyled = styled(NSAppBar)(() => ({
    backgroundColor:'#CCF5AC',
    color:'black'
  }));
  

  export const DrawerStyled = styled(NSDrawer)(() => ({
    width: 50,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 100,
      boxSizing: 'border-box',
    },
  }));
  
  export const DrawerList = styled(NSList)(() => ({
    color: 'white',
    marginTop:'30px',
    paddingRight:'5px'
  }));
  
  export const IconBox = styled(NSBox)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
      padding:'10px',
      paddingRight:'0px',
      borderRadius:'8px',
    '&:hover': {
      backgroundColor: 'white', 
      transition: 'background-color 0.3s ease',
      color:'black'
    },
    cursor: 'pointer',
  }));
  export const ArrowBox = styled(NSBox)(() => ({
    color: 'white',
    cursor: 'pointer',
    padding:'3px',
    paddingTop:'5px',
    borderRadius:'8px',
    '&:hover': {
      backgroundColor: '#A3D9A5',
      transition: 'background-color 0.3s ease',
    },
  }));
  export const IconText = styled(NSTypography)(() => ({
    paddingLeft:'5px',
    fontWeight:'550',

  }));

  export const DrawerButton = styled(NSButton)(() => ({
    position: 'fixed', 
    left: 0, 
    top: '50%' ,
    zIndex: 1201,
    backgroundColor: 'white', 
    borderRadius: '50%', 

  }));



