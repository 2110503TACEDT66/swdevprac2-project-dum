'use client'

import TimeSlotPanel from "../TimeSlotPanel/TimeSlotPanel";
import styles from './companyblock.module.css'
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from 'react';

export default function CompanyBlock({compName,website,tel,email,address,desc,img}:{compName:string,website:string,tel:string,email:string,address:string,desc:string,img:string}){

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
                        <div className={styles.compName}>{compName}</div>
                        <div className={styles.compDesc}>{desc}</div>
                    </div>
                    <div className={styles.imgBlock}>
                        <img src={img} alt="company logo" className={styles.compLogo}/>
                    </div>
                    
                </div>
                {expanded &&<div className={styles.bottomPart}>
                    <div className={styles.bottomTextBlock}>
                        <div className={styles.web}>
                            <div className={styles.topic}>Website : </div> 
                            <div> 
                                <a href={website} target="_blank" rel="noopener noreferrer" className={styles.link}>{website}</a>
                            </div>
                        </div>
                        <div className={styles.web}>
                            <div className={styles.topic}>Tel. number : </div> 
                            <div> {tel} </div>
                        </div>
                        <div className={styles.web}>
                            <div className={styles.topic}>Gmail : </div> 
                            <div> {email} </div>
                        </div>
                        <div className={styles.web}>
                            <div className={styles.topic}>Address : </div> 
                            <div> {address} </div>
                        </div>
                    </div>
                    <div className={styles.session}> Session :</div>
                    <TimeSlotPanel/>
                </div>}
            </div>
        </div>
      )
}