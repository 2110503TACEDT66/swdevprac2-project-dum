import styles from './bookingBlock.module.css'

export default function BookingBlock({userName, tel, email} : {userName:string, tel:string, email:string}) {
    return (
        <div className={styles.fullPage}>
            <div className={styles.fullBlock}>
                <div className={styles.userBlock}>
                    <div className={styles.detailBlock}>
                        <div className={styles.detail}>{userName}</div>
                        <div className={styles.detail}>{tel}</div>
                        <div className={styles.detail}>{email}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}