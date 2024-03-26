'use server'

import styles from './page.module.css'
import UserDetailCard from '@/components/UserDetailCard/UserDetailCard'
import UserReservationCard from '@/components/UserReservationCard/UserReservationCard'
import getUserReservation from '../libs/getUserReservation'
import LogoutButton from '@/components/LogoutButton/LogoutButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function ProfilePage () {

    const session = await getServerSession(authOptions)
    if (session && session.company) {
        redirect('/c/profile')
    }
    const reservationArray : Array<Object> = await getUserReservation()

    return (
        <div>
            <section className={styles.Sec1}>
                <UserDetailCard/>
            </section>

            <section className={styles.Sec2}>
                <UserReservationCard reservationArray = {reservationArray}/>
                
            </section>

            <section className={styles.Sec3}>
                <LogoutButton/>
            </section>

            
         </div>
       
    )
}