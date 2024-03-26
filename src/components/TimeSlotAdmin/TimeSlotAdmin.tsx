'use client'

import styles from './timeslotadmin.module.css'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';

export default function TimeSlotAdmin({date,time,currentCapacity,maxCapacity,desc,tid}:{date:Date , time:string , currentCapacity:number , maxCapacity:number, desc:string , tid:string}){

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
                    <div className={styles.editBlock}>
                        <Button variant="contained" className={styles.editButton}>
                        Edit
                        </Button>
                    </div>
                    <div className={styles.deleteBlock}>
                        <Button variant="contained" className={styles.deleteButton}>
                            Delete
                        </Button>
                    </div>
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