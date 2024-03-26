'use client'

import styles from './companydetailcard.module.css'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import companyUpdate from '@/app/libs/companyUpdate'
function CompanyDetailForm ({text  , keyy  , value } : {text : string , keyy : string , value : string}) {

    const [inpVal , setValue] = useState(value)

    return (
        <div className={styles.InputWrapper}>
            <div className={styles.InputWrapperText}>{text} :</div>
            <input type="text" name={keyy} value={inpVal} disabled onChange={(e) => {setValue(e.target.value)}}/>
        </div>
    )
}

export default  function CompanyDetailCard () {

    const [state , updateState]= useState(0)

    const {data: session, update: sessionUpdate} = useSession()
    
    var imageBuffer : string | null = null

    async function updateClickHandler () {

        const inpForm = document.forms[0]
        
        if (state == 0) {
            
            Array.from(inpForm).forEach((X : any)  => {
                X.disabled = false
            });

            imageBuffer = null

            updateState((state + 1) % 2)

            
        }

        else {

            const newData : any = {}

            Array.from(inpForm).forEach((X : any)  => {
                X.disabled = true
                newData[X.name] = X.value
            });


            const updatedCompany = await companyUpdate(session , newData)
            

            if (updatedCompany.data) {

                updatedCompany.data.token = session!.user.token
                session!.user = updatedCompany.data
                session!.company = updatedCompany.data

                if (imageBuffer){
                    session!.company.imageurl = imageBuffer
                    session!.user.imageurl = imageBuffer
                }
                
                sessionUpdate(session)
            }
            

            updateState((state + 1) % 2)

        }
        
    }

    useEffect(() => {

        const inpForm = document.forms[0]
            Array.from(inpForm).forEach((X : any)  => {
                X.disabled = true
            });


        if (state != 0) {
            updateState(0)
        }
    } , [])
    return(
        
        <div className={styles.DetailCard}>
            <div className={styles.TopBlock}>
                <div className={styles.LeftTopBlock}>
                    <h2>Your Profile</h2>
                </div>

                <div className={state == 1 ? styles.RightTopBlock : styles.RightTopBlockOneItem}>
                    
                    {state == 1 ? <button onClick={() => {imageBuffer = prompt('Enter Picture URL')}}>Change Picture</button> : ''}
                    <button onClick={updateClickHandler} className={styles.SaveButton}>{state == 0 ? 'Edit' : 'Save'}</button>
                </div>
                
            </div>

            <div className={styles.BottomBlock}>
                <Image className={styles.LeftBottomBlock} src={session!.company.imageurl} width={0} height={0} sizes='100vh' alt='companyProfilePic'></Image>
                
                <div className={styles.RightBottomBlock}>
                    <form name='company-update-form' className={styles.FormBlock}>
                        <CompanyDetailForm text='Name' keyy='name' value={session!.company.name}/>
                        <CompanyDetailForm text='Website' keyy='website' value={session!.company.website}/>
                        <CompanyDetailForm text='Tel' keyy='tel' value={session!.company.tel}/>
                        <CompanyDetailForm text='Email' keyy='email' value={session!.company.contact_email}/>

                        <CompanyDetailForm text='Description' keyy='description' value={session!.company.description}/>
                    </form>
                    
                    
                </div>
            </div>
{/*             
            <div className={styles.LeftBlock}>
                <div className={styles.LeftBlockTop}>
                    <text>Your Profile</text>
                    <text>[]</text>
                </div>
                <Image className={styles.LeftBlockBottom} src={session!.user.imageurl} width={0} height={0} sizes='100vh' alt='UserProfilePic'></Image>
            </div>

            <div className={styles.RightBlock}></div> */}
        </div>
    )
}

