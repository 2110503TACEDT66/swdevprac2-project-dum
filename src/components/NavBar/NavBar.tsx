import { Button } from '@mui/material'
import Link from 'next/link'
import styles from './navbar.module.css'
import { useSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export function NavBarButton ({text , link} : {text : string , link : string}) {
    return (

        <Link href={link} className={styles.NavBarButton}>
            <Button>{text}</Button>
        </Link>
    )
}

export default async function NavBar () {

    const session = await getServerSession(authOptions)

    console.log(session)


    return (
        <div className={styles.NavBar}>
            <div className={styles.NavBarContainer}>

            <Link className={styles.NavBarLogoPic} href="/">
                <div>LOGO</div>
            </Link>
                
                <div className={styles.NavBarButtonWrapper}>
                    <NavBarButton link= ''text='Company'/>
                    <NavBarButton link= '' text='Interview'/>
                    <NavBarButton link='/profile' text='Profile'/>
                    <div className={styles.NavBarButtonCollection}></div>
                    
                </div>
            </div>
        </div>
    )
}