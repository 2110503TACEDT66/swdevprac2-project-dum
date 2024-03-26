'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

const backend_url = process.env.BACKEND_URL

export default async function createNewTimeSlot (date : string, startTime : string , endTime : string , capacity : number , description : string) {
    
    const session = await getServerSession(authOptions)
    const newTimeSlot = await (await fetch(`${backend_url}/api/companies/${session!.company._id}/timeslot` , 
    
    {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${session?.company.token}`
        },
        body : JSON.stringify({
            date , startTime , endTime , capacity , description
        })
    })).json()

    return newTimeSlot

}