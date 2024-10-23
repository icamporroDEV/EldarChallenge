import styled from '@emotion/styled';
import {
    Box as NSBox,
  Typography as NSTypography,
  AppBar as NSAppBar,
  Button as NSButton,
  List as NSList,
  Drawer as NSDrawer,
  TableHead as NSTableHead,
  Card as NSCard,
  Grid as NSGrid,
  Paper as NSPaper
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
  }));
  export const HomeBox = styled(NSBox)(({theme}) => ({
      backgroundColor: '#F5F5F5',
      padding:'25px',
      marginLeft: `160px`, 
      [theme.breakpoints.down('lg')]: {
        marginLeft: 'auto',   
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,   
        padding: '10px',
        width:'100%'
      },

  }));
  export const IconBox = styled(NSBox)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
      padding:'10px',
      paddingRight:'0px',
      borderRadius:'8px',
    '&:hover': {
      backgroundColor: 'white', // Color when hovered
      transition: 'background-color 0.3s ease', // Smooth transition effect
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
  export const AddBox = styled(NSBox)(() => ({
 marginRight:'30px'
  }));
  export const IconText = styled(NSTypography)(() => ({
    paddingLeft:'5px',
    fontWeight:'550',

  }));


  export const TableHeadCustom = styled(NSTableHead)(() => ({
    backgroundColor:'#25291C',

  }));

  export const TableTitles = styled(NSTypography)(() => ({
    color:'white'

  }));

  export const PostsTitleBox = styled(NSBox)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
 
   }));
  export const PostsTitle = styled(NSTypography)(() => ({
    paddingBottom:'15px',
    marginTop:'20px',
    marginLeft:'15px',
    fontSize:'36px',
    fontWeight:600
 
   }));
   export const CardGrid = styled(NSGrid)(({theme}) => ({
  margin:'auto',
    [theme.breakpoints.down('sm')]: {
      height:'350px'
    },
  }));
   export const CardStyled = styled(NSCard)(({theme}) => ({
    width: '83.5vw',
    height: '150px',
    transition: 'box-shadow 0.3s ease',  
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',  
    '&:hover': { 
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', 
      cursor:'pointer'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,   
      height:'250px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,   
      height:'350px'
    },
  }));
  export const CardTitle = styled(NSTypography)(() => ({
   paddingBottom:'15px',
   fontSize:'22px',
   fontWeight:600,
   color:'black',

  }));
  export const CardBody = styled(NSTypography)(() => ({
    paddingBottom:'15px',
    fontSize:'18px',
    fontWeight:400,
    color:'black',
 
   }));
 

   export const CardTitleBox = styled(NSBox)(() => ({
    padding:'20px',
   height:'100px',
    maxWidth:'100%',
   }));   
   export const CardButtonsBox = styled(NSBox)(() => ({
  width:'100px'
   }));   
   export const CardContentBox = styled(NSBox)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',


   }));
 
 
   export const CardIconBox = styled(NSBox)(() => ({
      padding:'10px',
      borderRadius:'8px',
      color: '#40356E',
    '&:hover': {
      backgroundColor: '#40356E', 
      transition: 'background-color 0.3s ease', 
      color:'white'
    },
    cursor: 'pointer',
  }));
 
  export const ModalBox = styled(NSPaper)(() => ({
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: 400, 
    bgcolor: 'background.paper', 
    padding: '40px', 
    boxShadow: 24 
}));
export const ModalTitle = styled(NSTypography)(() => ({
  fontSize:'22px',
  paddingBottom:'20px',
  fontWeight:600
}));

export const OkButton = styled(NSButton)(() => ({
 backgroundColor:'#40356E',
 fontSize:'14px',
 color:'white',
 fontWeight:600,
  borderRadius:'22px',
}));
export const NoButton = styled(NSButton)(() => ({
  backgroundColor:'#9D1107',
  fontSize:'14px',
  color:'white',
  fontWeight:600,
  borderRadius:'22px'
 }));



