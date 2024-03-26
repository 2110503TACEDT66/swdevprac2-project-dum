import styles from './createnewcompany.module.css'
import { Button, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function CreateNewCompany() {
    
    return (
        <div className={styles.fullBlock}>
            <div className={styles.topPart}>
                <div className={styles.imageBlock}>
                    <img src='/Icon/account-black.png' alt='Profile picture' className={styles.image}/>
                    <div className={styles.iconBlock}>
                    <IconButton aria-label="edit">
                        <PhotoCameraIcon className={styles.cameraButton}/>
                    </IconButton> 
                    </div>
                </div>
                <div className={styles.textBlock}>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Name
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField id="name" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Website
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField id="website" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Tel. number
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField id="tel" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Sign-up Email
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField id="signupemail" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Contact Email
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField id="contactemail" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Description
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField id="desc" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                    <div className={styles.rowBlock}>
                        <div className={styles.topicBlock}>
                            Password
                        </div>
                        <div className={styles.inputBlock}>
                            <TextField id="password" type="password" variant="standard" className={styles.textField}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.botPart}>
                <div className={styles.buttonBlock}>
                    <Button variant="contained" className={styles.addButton}>
                        Create new Company
                    </Button>
                </div>
            </div>
        </div>
    )
}