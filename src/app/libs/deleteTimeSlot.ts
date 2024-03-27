'use server'

import { revalidateTag } from "next/cache"

const backend_url = process.env.BACKEND_URL

export default async function deleteTimeSlot (user : any , timeslotId : string) {
    console.log(`${backend_url}/api/companies/${user.data._id}/timeslot/${timeslotId}`)
    const deleteTimeSlot = await fetch(`${backend_url}/api/companies/${user.data._id}/timeslot/${timeslotId}` , {
        method : 'DELETE',
        headers : {
            authorization : `Bearer ${user.data.token}`
        }
    })

    if (!deleteTimeSlot.ok)
        return null
    
    revalidateTag('companyData')
    return await deleteTimeSlot.json()
}