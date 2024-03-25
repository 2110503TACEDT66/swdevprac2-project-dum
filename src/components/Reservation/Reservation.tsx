'use client'

import styles from './reservation.module.css'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';

export default function Reservation({compName,date,time,currentCapacity,maxCapacity,desc,img}:{compName:string,date:Date , time:string , currentCapacity:number , maxCapacity:number , desc:string ,img:string}){

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return(
        <div className={styles.fullBlock}>
            <div className={styles.rowBlock}>
                {!expanded && 
                    <div className={styles.rowBlock}>
                        <div className={styles.compName}>{compName}</div>
                        <div className={styles.textBlock}>{date.toLocaleDateString()}</div>
                        <div className={styles.textBlock}>{time}</div>
                        <div className={styles.textBlock}>Capacity : {currentCapacity}/{maxCapacity}</div>
                    </div>
                }
                {expanded &&
                    <div className={styles.expandBlock}>
                        <div className={styles.expandTextBlock}> 
                            <div className={styles.textHorizontal}> 
                                <div className={styles.horizontal}>{compName}</div>
                                <div className={styles.horizontal}>{date.toLocaleDateString()}</div> 
                            </div> 
                            <div className={styles.textHorizontal}> 
                                <div className={styles.horizontal}>Capacity : {currentCapacity}/{maxCapacity}</div>
                                <div className={styles.horizontal}>{time}</div> 
                            </div> 
                            <div className={styles.desc}>
                                {desc}
                            </div>
                            <div className={styles.buttonBlock}> 
                                <Button variant="contained" className={styles.addButton}>
                                    Delete
                                </Button>        
                            </div>
                        </div>
                        <div className={styles.imageBlock}> <img src={img} alt='Company Logo' className={styles.image}/> </div>
                    </div>
                }
                
                <div className={styles.minimizeBlock}> 
                    <IconButton onClick={toggleExpand} aria-label={expanded ? 'Collapse' : 'Expand'}>
                        {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </div>
            
            {/* {expanded && <div className={styles.description}>{desc}
            
                </div>} */}
            </div>
        </div>
    )
}