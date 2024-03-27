import { getServerSession, Session } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
const backend_url = process.env.BACKEND_URL

export default async function getUserData() {

    const session = await getServerSession(authOptions)
    
    if (!session)
        return null 
    const userData = await (await fetch(`${backend_url}/api/auth/me` , {
        headers : {
            authorization : `Bearer ${session.user.token}`
        },
        next : {
            tags : ['userData']
        }
    })).json()

    return userData
    
}