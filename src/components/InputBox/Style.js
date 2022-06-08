import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

    typography:{
        p:{
            fontSize:14,
            color:'#0B0D17',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '150%',
            fontFamily: 'Roboto',
            
        },
        span:{
            fontFamily:'"Roboto"',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '150%',
            color: '#898989'
        }
    },
    components:{	
        MuiOutlinedInput:{
            styleOverrides:{
                root:{
                    marginTop:'4px',
                    padding:'0px',
                    height:'60px',
                    '& input':{
                        padding: '15px 5px 15px 15px',
                        border: '1px solid #DCDCDC',
                        background:'#F4F5F7',
                        borderRadius: '5px',
                        '&:focus':{
                            border:'2px solid #8C30F5'
                        }
                    },
                    '& textarea':{
                        padding: '15px 5px 15px 15px',
                        border: '1px solid #DCDCDC',
                        background:'#F4F5F7',
                        borderRadius: '5px',
                        width:'100%',
                        '&:focus':{
                            border:'2px solid #8C30F5'
                        }
                    },
                    '& fieldset':{
                        border: 'none',
                    }
                }
            }
        },
        MuiTextField:{
            styleOverrides:{
                root:{
                    display:'flex',

                }
            }
        },
        MuiBox:{
            styleOverrides:{
                root:{
                    '& .texthelper ':{
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '150%',
                        color: '#898989',
                        marginBottom: '20px',
                    },
                }
            }
        }
        
    }

})

