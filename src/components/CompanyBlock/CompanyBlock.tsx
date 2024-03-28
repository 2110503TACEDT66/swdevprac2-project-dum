'use client'

import TimeSlotPanel from "../TimeSlotPanel/TimeSlotPanel";
import styles from './companyblock.module.css'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';
import Image from "next/image";
export default function CompanyBlock({company , thisUser}:{company : any , thisUser : any}){

    console.log(company)

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

      return(
        <div className={styles.mock}>
            <div className={styles.fullBlock}>
                <div className={styles.minimizeBlock}> 
                    <IconButton onClick={toggleExpand} aria-label={expanded ? 'Collapse' : 'Expand'}>
                        {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </div>
                <div className={styles.topPart}>
                    <div className={styles.textBlock}>
                        <div className={styles.compName}>{company.name}</div>
                        <div className={styles.compDesc}>{company.description}</div>
                    </div>
                    <div className={styles.imgBlock}>
                        <Image width={0} height={0} sizes="100vh" src={company.imageurl} alt="company logo" className={styles.compLogo}/>
                    </div>
                    
                </div>
                {expanded &&<div className={styles.bottomPart}>
                    <div className={styles.bottomTextBlock}>
                        <div className={styles.web}>
                            <div className={styles.topic}>Website : </div> 
                            <div> 
                                <a href={company.website ? company.website : 'none'} target="_blank" rel="noopener noreferrer" className={styles.link}>{company.website}</a> 
                            </div> 
                        </div> 
                        <div className={styles.web}>
                            <div className={styles.topic}>Tel. number : </div> 
                            <div> {company.tel? company.tel : 'none'} </div>
                        </div>
                        <div className={styles.web}>
                            <div className={styles.topic}>Email : </div> 
                            <div> {company.contact_email? company.contact_email : 'none'} </div>
                        </div>
                        <div className={styles.web}>
                            <div className={styles.topic}>Address : </div> 
                            <div> {company.address? company.address : 'none'} </div>
                        </div>
                    </div>
                    <div className={styles.session}> Session :</div>
                    <TimeSlotPanel companyTimeSlot={company.timeslot} thisUser = {thisUser}/>
                </div>}
            </div>
        </div>
      )
}