'use client'

import styles from './attendeepanel.module.css'
import Attendee from '../Attendee/Attendee'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';

export default function AttendeePanel(){

    const mockAttendee = [{name:"Aun",tel:"099-999-9999",email:"aunaunaun@gmail.com"},
    {name:"Chai",tel:"099-999-9999",email:"chaichaichai@gmail.com"},
    {name:"Ten",tel:"099-999-9999",email:"tententen@gmail.com"}
    ]

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return(
    
            <div className={styles.fullBlock}>
                <div className={styles.rowBlock}> 
                    {expanded &&
                        <div className={styles.Heading}>Attendee :</div>
                    }
                    {!expanded &&
                        <div className={styles.numbersOfAttendee}> {mockAttendee.length} attendees in this session </div>
                    }
                    

                    <div className={styles.minimizeBlock}> 
                        <IconButton onClick={toggleExpand} aria-label={expanded ? 'Collapse' : 'Expand'}>
                            {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </IconButton>
                    </div>
                </div>
                {expanded && (
                    <>
                    {mockAttendee.map((attendee) => (
                        <Attendee
                        key={attendee.email}
                        name={attendee.name}
                        tel={attendee.tel}
                        email={attendee.email}
                        />
                    ))}
                    </>
                )}
            </div>
        
        
    )
}