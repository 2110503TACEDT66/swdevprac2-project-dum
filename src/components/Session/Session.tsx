import AttendeePanel from '../AttendeePanel/AttendeePanel'
import styles from './session.module.css'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


export default function Session({date,time,currentCapacity,maxCapacity,desc}:{date:string,time:string,currentCapacity:number,maxCapacity:number,desc:string}){
    return (
        <div className={styles.fullBlock}>
            <div className={styles.rowBlock}> 
                <div className={styles.topic}> 
                    {date} 
                    {/* <IconButton aria-label="edit">
                        <EditIcon className={styles.editButton}/>
                    </IconButton>  */}
                </div>
                <div className={styles.Time}> 
                    {time} 
                    {/* <IconButton aria-label="edit">
                        <EditIcon className={styles.editButton}/>
                    </IconButton>  */}
                </div>
                <div className={styles.Capa}> 
                    Capacity:{currentCapacity}/{maxCapacity} 
                    <IconButton aria-label="edit">
                        <EditIcon className={styles.editButton}/>
                    </IconButton> 
                </div>
            </div>
            <div className={styles.topic}> 
                Description : 
                {/* <IconButton aria-label="edit">
                    <EditIcon className={styles.editButton}/>
                </IconButton>  */}
            </div>
            <div className={styles.desc}> {desc} </div>
            <AttendeePanel/>
            <div className={styles.buttonBlock}> 
                <Button variant="contained" className={styles.addButton}>
                    Delete this session
                </Button> 
            </div>
        </div>
    )
}