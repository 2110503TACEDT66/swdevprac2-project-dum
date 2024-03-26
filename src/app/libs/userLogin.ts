const backend_url = process.env.BACKEND_URL

export default async function userLogin(userEmail : string , userPassword : string) {
    const userToken = await getUserToken(userEmail , userPassword)

    const userDetail = await getUserDetail(userToken.token)

    if (userDetail && userToken)
        userDetail.data.token = userToken.token
    
    return userDetail

}

async function getUserToken (userEmail : string, userPassword : string) {
    const responseToken = await fetch(`${backend_url}/api/auth/login` , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            email : userEmail , 
            password : userPassword
        })
    })

    if (!responseToken.ok)
        throw new Error ('Faild to get token')

    return await responseToken.json()
}

async function getUserDetail (userToken : string) {

    const userDetail = await fetch(`${backend_url}/api/auth/me` , {
        headers : {
            authorization : `Bearer ${userToken}`
        }
        ,
        cache : 'no-store'
    })

    if (!userDetail)
        throw new Error ('Faild to get User')

    return await userDetail.json()
}