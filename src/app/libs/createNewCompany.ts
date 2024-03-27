'use server'

import { revalidateTag } from "next/cache"

export default async function createNewCompany(user : any , companyData : any) {
    const backend_url = process.env.BACKEND_URL
    // console.log(JSON.stringify(companyData))
    const newCompany = await fetch(`${backend_url}/api/companies` , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${user.data.token}`
        },
        body : JSON.stringify({
            ...companyData
        })
    })
    console.log(newCompany.status)
    if (!newCompany.ok)
        return null
    
    revalidateTag('allCompanies')

    return await newCompany.json()
}