import Image from 'next/image'
import styles from './page.module.css'
import CompanyIntBlock from '@/components/CompanyIntBlock/CompanyBlock'
import CompanyIntPanel from '@/components/CompanyIntPanel/CompanyIntPanel'
import TimeSlot from '@/components/TimeSlot/TimeSlot'
import TimeSlotPanel from '@/components/TimeSlotPanel/TimeSlotPanel'
import CompanyBlock from '@/components/CompanyBlock/CompanyBlock'
import CompanyPanel from '@/components/CompanyPanel/CompanyPanel'

export default function CompanyPage() {
    return (
        <div>
            {/* <TimeSlotPanel/> */}
            <CompanyPanel/>
        </div>
        
    )
}
