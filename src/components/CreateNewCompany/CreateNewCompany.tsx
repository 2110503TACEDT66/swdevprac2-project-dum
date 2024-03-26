import styles from './createnewcompany.module.css'
import { Button, TextField } from '@mui/material';

export default function CreateNewCompany() {
    
    return (
        <div className={styles.fullBlock}>
            <div className={styles.topPart}>
                <div className={styles.imageBlock}>
                    <img src='/Icon/account-black.png' alt='Profile picture'/>
                </div>
                <div className={styles.textBlock}>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>

                        </div>
                        <div className={styles.inputBlock}>

                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>

                        </div>
                        <div className={styles.inputBlock}>

                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botPart}>

            </div>
        </div>
    )
}