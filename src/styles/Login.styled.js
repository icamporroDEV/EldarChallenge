import styled from '@emotion/styled';
import {
    Box as NSBox,
  Container as NSContainer,
  Typography as NSTypography,
  TextField as NSTextfield,
  Button as NSButton,
} from '@mui/material';

export const LoginRoot = styled(NSBox)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'100vh',
    width:'100%'
    
  }));
export const LoginFormBox = styled(NSBox)(() => ({
  backgroundColor:'#40356E',
  width:'100%',
  height:'100%',
  }));
  
  export const LoginFormContainer= styled(NSContainer)(() => ({
  paddingTop:'50px',
  marginTop:'5%',
  height:'70%',
  backgroundColor:'#F5F5F5',
  borderRadius:'16px',
  width:'50%'
    }));

    export const LogoContainer = styled(NSContainer)(() => ({
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom:'100px',
        marginLeft:'120px'
    
        }));

  export const LoginTitle = styled(NSTypography)(() => ({
    fontSize:'56px',
    fontWeight:800,
    color:'#021526',
    }));
   
  export const FormContainer = styled(NSContainer)(() => ({
height:'200px',
display:'flex',
flexDirection:'column',
alignItems:'center'
            }));

  export const LoginTextField = styled(NSTextfield)(() => ({

  backgroundColor:'#F5F5F5',
  paddingBottom:'30px',
  marginLeft:'30px'

        }));   
  export const LoginButton = styled(NSButton)(() => ({
    width:'392px',
    height:'56px',
    marginTop:'87px',
    borderRadius:'32px',
    backgroundColor:'#40356E',
    color:'white'
            }));
            
  




