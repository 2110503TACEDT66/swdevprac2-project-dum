// import Image from 'next/image'
// import styles from './page.module.css'
// import CompanyIntBlock from '@/components/CompanyIntBlock/CompanyBlock'
// import CompanyIntPanel from '@/components/CompanyIntPanel/CompanyIntPanel'
// import TimeSlot from '@/components/TimeSlot/TimeSlot'
// import TimeSlotPanel from '@/components/TimeSlotPanel/TimeSlotPanel'
// import CompanyBlock from '@/components/CompanyBlock/CompanyBlock'
import CompanyPanel from '@/components/CompanyPanel/CompanyPanel'
import getAllCompanies from '../libs/getAllCompanies'
import getUserData from '../libs/getUserData'
import { revalidateTag } from 'next/cache'

export default async function CompanyPage() {

    const allCompanies = await getAllCompanies()
    const thisUser = await getUserData()
    revalidateTag('allCompanies')
    return (
        
            <CompanyPanel allCompanies = {allCompanies} thisUser = {thisUser}/>
         
    )
}
