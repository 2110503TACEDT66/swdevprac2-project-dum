'use client'

import styles from './timeslot.module.css'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
import reserveTimeSlot from '@/app/libs/reserveTimeSlot';
import { useSession } from 'next-auth/react';
import getMe from '@/app/libs/getMe';

export default function TimeSlot({date,time,currentCapacity,maxCapacity,reserv,desc,tid}:{date:Date , time:string , currentCapacity:number , maxCapacity:number , reserv:number , desc:string , tid : string}){

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
                    reserv == 1 ? <Button variant="contained" className={styles.addButton} onClick={async () => {await reserveTimeSlot(tid) ;}}>
                        Reserve 
                    </Button>:
                    (reserv == 0 ? <Button variant="contained" disabled className={styles.disabledButton}>
                        Please Login
                    </Button>: 
                    
                    (reserv == -1 ? <Button variant="contained" disabled className={styles.disabledButton}>
                    Reserved
                    </Button> : <Button variant="contained" disabled className={styles.disabledButton}>
                        Full
                    </Button> )
                    
                    )
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