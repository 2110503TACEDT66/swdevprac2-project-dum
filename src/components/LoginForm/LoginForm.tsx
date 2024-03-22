import { TextField } from '@mui/material'
import styles from './loginform.module.css'

export default function LoginForm(){
    return (
        <div className={styles.loginBlock}>
            <h1 className={styles.title}>Log in</h1>
            <form id='login-form' className={styles.loginForm}>
                <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="password"
                label="Password"
                variant="outlined"
                type='password'
                className={styles.TextField}
                margin='dense'/>
                <button className={styles.loginButton}>
                    Login
                </button>
            </form>
        </div>
    )
}