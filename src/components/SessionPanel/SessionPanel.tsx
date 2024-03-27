import styles from './sessionpanel.module.css'
import Session from '../Session/Session'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function SessionPanel(){

    const session = await getServerSession(authOptions)
    const thisCompanyTimeSlot = session?.company.timeslot

    return(
        <div className={styles.mock}>
            <div className={styles.fullBlock}>
            {thisCompanyTimeSlot.map((timeslot : any) => (
                        <Session date={timeslot.date.split('T')[0]}
                            key={timeslot._id}
                            maxCapacity={timeslot.capacity}
                            currentCapacity={timeslot.reservation.length}
                            time={timeslot.startTime + "-" + timeslot.endTime}
                            desc={timeslot.description}/>
                ))}
            </div>
        </div>
        
    )
}