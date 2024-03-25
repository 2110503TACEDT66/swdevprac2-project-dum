export default async function getAllCompanies () {

    const backend_url = process.env.BACKEND_URL
    const allCompanies = await (await (fetch(`${backend_url}/api/companies`))).json()

    return allCompanies

}