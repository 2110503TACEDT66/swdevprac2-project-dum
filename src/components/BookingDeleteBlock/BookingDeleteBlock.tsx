import styles from './bookingDeleteBlock.module.css'

export default function BookingDelete({compName, date, time} : {compName:string, date:string, time:string}) {


    return (
        
            <div className={styles.reserve}>
                <div className={styles.reserveDetail}>{compName}</div>
                <div className={styles.reserveDetail}>{date}</div>
                <div className={styles.reserveDetail}>{time}</div>
            </div>

    )

}