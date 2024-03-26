import BookingDelete from '../BookingDeleteBlock/BookingDeleteBlock'
import BookingDeletePanel from '../BookingDeletePanel/BookingDeletePanel'
import styles from './bookingBlock.module.css'

export default function BookingBlock({userName, tel, email , reserv} : {userName:string, tel:string, email:string , reserv:object} ) {
    return (
        
            
                <div className={styles.userBlock}>
                    <div className={styles.detailBlock}>
                        <div className={styles.infoBlock}>
                            <div className={styles.detail}>{userName}</div>
                            <div className={styles.detail}>{tel}</div>
                            <div className={styles.detail}>{email}</div>
                        </div>
                        
                        <BookingDeletePanel reserv={reserv}/>
                    </div>
                </div>
        
    )
}