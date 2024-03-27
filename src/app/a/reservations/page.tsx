import getAllUser from "@/app/libs/admingetalluser"
import styles from './page.module.css'
import UserReservationBlock from "@/components/UserReservationBlock/UserReservationBlock"

export default async function() {
    const allUser = ((await getAllUser()).data).filter((user : any) => user.role === 'user' && user.reservation.length > 0)
    
    return (
        <div className={styles.Sec1}>
            <div className={styles.ReservationWrapper}>

                {allUser.map((user : any) => (<UserReservationBlock user={user} key={user._id}/>))}
                
            </div>
        </div>
    )

}