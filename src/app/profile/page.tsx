import styles from './page.module.css'
import UserDetailCard from '@/components/UserDetailCard/UserDetailCard'
export default function ProfilePage () {
    return (
        <div>
            <section className={styles.Sec1}>
                <UserDetailCard/>
            </section>

            <section className={styles.Sec2}>
                
            </section>
         </div>
       
    )
}