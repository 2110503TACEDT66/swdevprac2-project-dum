import TimeSlotAdmin from '../TimeSlotAdmin/TimeSlotAdmin';
import styles from './timeslotadminpanel.module.css'

export default function TimeSlotAdminPanel({companyTimeSlot} : {companyTimeSlot : any}){

    // const mockTimeslotRepo = [
    //     {
    //       id: "001",
    //       compName: "AunnieInwZa",
    //       image: "/Icon/account-black.png",
    //       currentCapa: 0,
    //       maxCapa: 3,
    //       date: new Date('2023-03-24'),
    //       time: '14:00',
    //       reserv: true,
    //       desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."
    //     },
    //     {id: "002",compName: "Aunnoon",image: "/Icon/account-black.png",currentCapa: 2,maxCapa: 5,date: new Date('2023-03-25'),time: '10:30',reserv: false,
    //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
    //     ];

    return(
            <div className={styles.fullBlock}>
                {companyTimeSlot.map((timeslot : any) => (
                        <TimeSlotAdmin tid={timeslot._id}  key={timeslot._id} currentCapacity={timeslot.reservation.length}
                            maxCapacity={timeslot.capacity}
                            date={new Date(timeslot.date.split('T')[0])}
                            time={timeslot.startTime + '-' + timeslot.endTime}
                            desc={timeslot.description}/>
                ))}
            </div>
    )
    
}