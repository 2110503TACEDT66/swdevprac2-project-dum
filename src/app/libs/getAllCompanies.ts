'use server'

export default async function getAllCompanies () {

    const backend_url = process.env.BACKEND_URL
    const allCompanies = await fetch('http://localhost:1234/api/companies' , {cache: "no-store"})
    
    
    return await allCompanies.json()

}