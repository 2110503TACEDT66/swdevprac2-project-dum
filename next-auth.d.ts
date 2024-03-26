import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user : {
            _id: string,
            name: string,
            email: string,
            role: string,
            tel: string,
            imageurl: string,
            reservation: Array,
            token : string
        }
        company : {
            _id : string,
            name: string,
            address: string,
            website: string,
            description: string,    
            tel: string,
            contact_email: string,
            size: string,
            imageurl: string,
            timeslot: Array
        }
    }
}