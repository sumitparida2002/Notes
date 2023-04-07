import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {GoogleLogin} from 'react-google-login'

import useStyles from './styles'
import Input from './Input'

const Auth = () => {
  const classes=useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  const handleSubmit=()=>{

  }
  const handleChange=()=>{

  }

  const switchMode=()=>{
    setIsSignup((prevIsSignup)=>!prevIsSignup)
    handleShowPassword(false)
  }

  const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
               
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange}  half />            
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange}  type="email" />  
            <Input name="password" label="Password" handleChange={handleChange}  type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />       
            {isSignup && <Input name="confirmPasword" label="Repeat Password" handleChange={handleChange} type="password"/>}   


          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item onClick={switchMode}>
              {isSignup ? 'Already have an Account ? Sign In' : 'Dont Have an Account ? Sign Up'}
            </Grid>  
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth