import getAllUser from "@/app/libs/admingetalluser";
import BookingBlock from "../BookingBlock/BookingBlock";
import CompanyIntBlock from "../CompanyIntBlock/CompanyBlock";
import styles from './bookingPanel.module.css'

    //     const mockTimeslotRepo = [
    //     {
    //         id: "001",
    //         compName: "AunnieInwZa",
    //         image: "/Icon/account-black.png",
    //         currentCapa: 0,
    //         maxCapa: 3,
    //         date: new Date('2023-03-24'),
    //         time: '14:00',
    //         reserv: true,
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....",
    //         website: "www.example.com",
    //         tel: "123-456-7890",
    //         email: "info@example.com",
    //         address: "123 Example St, Example City"
    //     },
    //     { id: "002", compName: "Aunnoon", image: "/Icon/account-black.png", currentCapa: 2, maxCapa: 5, date: new Date('2023-03-25'), time: '10:30', reserv: false, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" },
    //     { id: "003", compName: "Aunneeeee", image: "/Icon/account-black.png", currentCapa: 1, maxCapa: 4, date: new Date('2023-03-26'), time: '16:00', reserv: true, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" },
    //     { id: "004", compName: "Aunni", image: "/Icon/account-black.png", currentCapa: 3, maxCapa: 3, date: new Date('2023-03-27'), time: '09:00', reserv: false, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" },
    //     { id: "005", compName: "Aunnnn", image: "/Icon/account-black.png", currentCapa: 0, maxCapa: 2, date: new Date('2023-03-28'), time: '13:30', reserv: true, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....", website: "www.example.com", tel: "123-456-7890", email: "info@example.com", address: "123 Example St, Example City" }
    // ];

   

export default async function(){
    
    const allUser = await getAllUser();

    return(
        <div className={styles.fullBlock}>
            {/* {mockTimeslotRepo.map((timeslot) => (
                <div className={styles.bookingPanel}>
                    <BookingBlock
                        userName={timeslot.compName}
                        tel={timeslot.tel}
                        email={timeslot.email}
                    />
                </div>
            ))} */}
            {allUser.data.map((user:any) => (
                <div className={styles.bookingPanel}>
                    <BookingBlock
                        userName={user.name}
                        tel={user.tel}
                        email={user.email}
                        reserv={user.reservation}
                    />
                </div>
            ))}
        </div>
    )
}