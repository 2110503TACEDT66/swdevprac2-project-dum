import BookingBlock from "@/components/BookingBlock/BookingBlock";
import BookingDelete from "@/components/BookingDeleteBlock/BookingDeleteBlock";
import BookingDeletePanel from "@/components/BookingDeletePanel/BookingDeletePanel";
import BookingPanel from "@/components/BookingPanel/BookingPanel";
import styles from '@/components/BookingBlock/bookingBlock.module.css'


export default function TestBooking() {
    return(
        <div className={styles.fullPage}>
            <div className={styles.fullBlock}>
                <BookingPanel/>
            </div>
        </div>
    )
}