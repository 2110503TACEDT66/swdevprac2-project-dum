import { Button } from '@mui/material'

import styles from './navbar.module.css'

export function NavBarButton ({text} : {text : string}) {
    return (
        <Button className={styles.NavBarButton}>{text}</Button>
    )
}

export default function NavBar () {
    return (
        <div className={styles.NavBar}>
            <div className={styles.NavBarContainer}>
                <div className={styles.NavBarLogoPic}>LOGO</div>
                <div className={styles.NavBarButtonWrapper}>
                    <NavBarButton text='Company'/>
                    <NavBarButton text='Interview'/>
                    <NavBarButton text='Profile'/>
                    <div className={styles.NavBarButtonCollection}></div>
                </div>
            </div>
        </div>
    )
}