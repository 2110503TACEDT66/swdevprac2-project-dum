import TimeSlot from "../TimeSlot/TimeSlot"
import styles from './timeslotpanel.module.css'

export default function TimeSlotPanel(){

    const mockTimeslotRepo = [
        {
          id: "001",
          compName: "AunnieInwZa",
          image: "/Icon/account-black.png",
          currentCapa: 0,
          maxCapa: 3,
          date: new Date('2023-03-24'),
          time: '14:00',
          reserv: true,
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."
        },
        {id: "002",compName: "Aunnoon",image: "/Icon/account-black.png",currentCapa: 2,maxCapa: 5,date: new Date('2023-03-25'),time: '10:30',reserv: false,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "003",compName: "Aunneeeee",image: "/Icon/account-black.png",currentCapa: 1,maxCapa: 4,date: new Date('2023-03-26'),time: '16:00',reserv: true,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "004",compName: "Aunni",image: "/Icon/account-black.png",currentCapa: 3,maxCapa: 3,date: new Date('2023-03-27'),time: '09:00',reserv: false,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "005",compName: "Aunnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',reserv: true,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "006",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',reserv: true,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "007",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',reserv: true,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "008",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',reserv: true,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "009",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',reserv: true,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."},
        // {id: "010",compName: "Aunnannnnnn",image: "/Icon/account-black.png",currentCapa: 0,maxCapa: 2,date: new Date('2023-03-28'),time: '13:30',reserv: true,
        // desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...."}
      ];

    return(
            <div className={styles.fullBlock}>
                {mockTimeslotRepo.map((timeslot) => (
                        <TimeSlot currentCapacity={timeslot.currentCapa}
                            maxCapacity={timeslot.maxCapa}
                            date={timeslot.date}
                            time={timeslot.time}
                            reserv={timeslot.reserv}
                            desc={timeslot.desc}/>
                ))}
            </div>
    )
    
}