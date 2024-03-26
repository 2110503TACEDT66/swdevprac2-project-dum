import CompanyProfile from "@/components/CompanyProfile/CompanyProfile"
import CompanyDetailCard from "@/components/CompanyDetailCard/CompanyDetailCard"
import styles from './page.module.css'
import CreateSession from "@/components/CreateSession/CreateSession"
export default function TestAttendee(){
    return(
        <div>
            <div className={styles.Sec1}>
                <CompanyDetailCard/>
            </div>

            <div className={styles.Sec2}>
                <CreateSession/>
            </div>

            <div className={styles.Sec3}>
                
            </div>
        </div>
        
    )
}