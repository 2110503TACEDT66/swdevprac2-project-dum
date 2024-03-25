import styles from './page.module.css'
import UserDetailCard from '@/components/UserDetailCard/UserDetailCard'
export default function ProfilePage () {
    return (
       <section className={styles.Sec1}>
            <UserDetailCard/>
       </section>
    )
}