import CompanyProfile from "@/components/CompanyProfile/CompanyProfile"
import CompanyDetailCard from "@/components/CompanyDetailCard/CompanyDetailCard"
import styles from './page.module.css'

export default function TestAttendee(){
    return(
        <div className={styles.Sec1}>
        <CompanyDetailCard/>
        {/* <CompanyProfile name="nornn" web="www.sleeping.com" tel="091-111-2222" email="sleepy@gmail.com" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...." img="/Icon/account-black.png"/> */}
        </div>
    )
}