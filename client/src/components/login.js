import { React } from 'react'
import { Grid, Paper, TextField, Button, Box } from '@material-ui/core'
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Logo from "../components/images/logo.png"
import Coluna1 from "../components/images/coluna1.jpg"
import './login.css';
import VisibilityIcon from '@material-ui/icons/Visibility';




const Login = () => {

    const paperStyle = { padding: 20, height: '70vh', width: '80%', margin: "20px auto" }
    const btnstyle = { margin: '8px 0' }
    const styles = {
        paperContainer: {backgroundImage: `url(${Coluna1})`, 
        backgroundPosition:'center',  
        padding: 20, margin: "20px auto", 
        backgroundSize: '100% 100%', 
        backgroundRepeat: 'no-repeat',

        }
    };
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={8} style={styles.paperContainer} >


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={10} style={paperStyle} align='center'>
                            <Grid align='center'>
                                <img alt="logo" src={Logo} />
                            </Grid>

                            <TextField label='Usuário' placeholder='Entre com usuário' fullWidth required />
                            <TextField label='Senha' placeholder='Entre com senha' type='password' startIcon={<VisibilityIcon />} fullWidth required />

                            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Continuar</Button>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default Login