'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function getAllUser () {

    const backend_url = process.env.BACKEND_URL

    const session = await getServerSession(authOptions)

    const allUser = await fetch(`${backend_url}/api/auth/alluser` , {
        headers : {
            authorization : `Bearer ${session?.user.token}`
        }
    })
        
    return await allUser.json()

}