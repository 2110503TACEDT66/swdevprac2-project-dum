import AdminProfile from "@/components/AdminProfile/AdminProfile";
import styles from '@/components/AdminProfile/adminprofile.module.css'

export default function TestProfile(){
    return(
        <div className={styles.wholePage}>
            <AdminProfile/>
        </div>
    )
}