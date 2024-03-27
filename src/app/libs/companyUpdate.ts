'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { revalidateTag } from "next/cache"
const backend_url = process.env.BACKEND_URL

export default async function companyUpdate (companyId : any , token : any , newData : Object) {
    try {
        const updateCompany = await fetch(`${backend_url}/api/companies/${companyId}` , {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${token}`
        },
        body : JSON.stringify(
            newData
        )
    })
    if (!updateCompany.ok)
        return null
    
    revalidateTag('companyData')
    return await updateCompany.json()
    }
    catch(err) {
        console.error("return same session")
        return null
    }

}