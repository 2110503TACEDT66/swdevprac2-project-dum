'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
const backend_url = process.env.BACKEND_URL

export default async function companyUpdate (session : any , newData : Object) {
    try {
        
        const updateCompany = await fetch(`${backend_url}/api/companies/${session.company._id}` , {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${session.company.token}`
        },
        body : JSON.stringify(
            newData
        )
    })
    if (!updateCompany.ok)
        return session
    
    return await updateCompany.json()
    }
    catch(err) {
        console.error("return same session")
        return session
    }

}