'use server'

import styles from './page.module.css'
import UserDetailCard from '@/components/UserDetailCard/UserDetailCard'
import UserReservationCard from '@/components/UserReservationCard/UserReservationCard'
import getUserReservation from '../libs/getUserReservation'
import LogoutButton from '@/components/LogoutButton/LogoutButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import getUserData from '../libs/getUserData'

export default async function ProfilePage () {

    const session = await getServerSession(authOptions)
    if (session && session.user.role === 'company') {
        redirect('/c/profile')
    }

    const userData = await getUserData()
    userData.token = session?.user.token

    return (
        <div>
            <section className={styles.Sec1}>
                <UserDetailCard userData={userData}/>
            </section>

            <section className={styles.Sec2}>
                <UserReservationCard userData={userData}/>
            </section>

            <section className={styles.Sec3}>
                <LogoutButton/>
            </section>

            
         </div>
       
    )
}