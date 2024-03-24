'use client'

import styles from './timeslot.module.css'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';

export default function TimeSlot({date,time,currentCapacity,maxCapacity,reserv,desc}:{date:Date , time:string , currentCapacity:number , maxCapacity:number , reserv:boolean , desc:string}){

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return(
        <div className={styles.fullBlock}>
            <div className={styles.rowBlock}>
                <div className={styles.textBlock}>{date.toLocaleDateString()}</div>
                <div className={styles.textBlock}>{time}</div>
                <div className={styles.textBlock}>Capacity : {currentCapacity}/{maxCapacity}</div>
                <div className={styles.buttonBlock}> 
                {
                    reserv?<Button variant="contained" className={styles.addButton}>
                        Reserve
                    </Button>:
                    <Button variant="contained" disabled className={styles.disabledButton}>
                        Unavailable
                    </Button>
                } 
                </div>
                <div className={styles.minimizeBlock}> 
                    <IconButton onClick={toggleExpand} aria-label={expanded ? 'Collapse' : 'Expand'}>
                        {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </div>
            </div>
            {expanded && <div className={styles.description}>{desc}</div>}
        </div>
    )
}