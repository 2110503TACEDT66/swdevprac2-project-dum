import { TextField } from '@mui/material'
import styles from './registerform.module.css'

export default function RegisterForm(){
    return (
        <div className={styles.registerBlock}>
            <form id='register-form' className={styles.registerForm}>
                <TextField
                required
                id="name"
                label="Name-Lastname"
                variant="filled"
                sx={{ width: '85%' }}
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="email"
                label="Email"
                variant="filled"
                sx={{ width: '85%' }}
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="telnumber"
                label="Telephone number"
                variant="filled"
                sx={{ width: '85%' }}
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="password"
                label="Create your password"
                variant="filled"
                sx={{ width: '85%' }}
                type='password'
                className={styles.TextField}
                margin='dense'/>
                <TextField
                required
                id="password"
                label="Confirm your password"
                variant="filled"
                sx={{ width: '85%' }}
                type='password'
                className={styles.TextField}
                margin='dense'/>
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}