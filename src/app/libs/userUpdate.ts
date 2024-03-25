'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
const backend_url = process.env.BACKEND_URL

export default async function userUpdate (session : any , newData : Object) {
    try {
    const updateUser = await fetch(`${backend_url}/api/auth/me` , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            authorization : `Bearer ${session.user.token}`
        },
        body : JSON.stringify(
            newData
        )
    })

    if (!updateUser.ok)
        return session

    return await updateUser.json()
    }
    catch(err) {
        console.log("return same session")
        return session
    }

}