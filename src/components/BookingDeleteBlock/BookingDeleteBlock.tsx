import styles from './bookingDeleteBlock.module.css'
import { Button } from '@mui/material';


export default function BookingDeleteBlock({compName, date, time} : {compName:string, date:Date, time:string}) {


    return (
        
            <div className={styles.reserve}>
                <div className={styles.reserveDetail}>{compName}</div>
                <div className={styles.reserveDetail}>{date.toLocaleDateString()}</div>
                <div className={styles.reserveDetail}>{time}</div>
                <Button variant="contained" className={styles.deleteButton}>
                    Delete 
                </Button>
            </div>

    )

}