'use client'

import styles from './signin.module.css'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import registerUser from '@/app/libs/registerUser'
import { signIn, useSession } from 'next-auth/react'

export default function SignIn() {

    async function SignUpClickHandler () {

        const email = document.forms[0]['email'].value
        const password = document.forms[0]['password'].value
        const name = document.forms[0]['namee'].value
        const tel = document.forms[0]['tel'].value

        const thisUser = await registerUser(email , password , name , tel)
        if (thisUser) {
            await signIn('credentials' , {
                email : thisUser.data.email,
                password : password
            })
        }
    }

    const router = useRouter()

    const [state , updateState] = useState(true)
    
    return (
        <div className={styles.ContentWrapper}>
            <div className={state? styles.SignUpPageMinimal :  styles.SignUpPage}>
                <div className={styles.SignUpHeader} onClick={() => {updateState(!state)}}>Sign Up</div>
                    <form onSubmit={(e) => {e.preventDefault();}} name="SignUp" className={styles.SignUpForm}>
                        <input type="email" name="email" placeholder='Email' required/>
                        <input type="password"  name="password" placeholder='Password' required/>
                        <input type="text" name="namee" placeholder='Name Lastname (Optional)' />
                        <input type="tel" name="tel" placeholder='Telephone Number (Optional)' />
                        <input type="submit" value="Sign Up" onClick={() => {SignUpClickHandler() ; router.push('/')}}/>
                    </form>
            </div>
            <div className={state? styles.SignInPageExpand : styles.SignInPage}>
                <div className={styles.SignInHeader} onClick={() => {updateState(!state)}} >Sign In</div>
            </div>
        </div>
    )
}