import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserData from "@/app/libs/getUserData";
import CompanyAdminBlock from "@/components/CompanyAdminBlock/CompanyAdminBlock";
import CompanyAdminPanel from "@/components/CompanyAdminPanel/CompanyAdminPanel";
import CreateNewCompany from "@/components/CreateNewCompany/CreateNewCompany";
import TimeSlotAdminPanel from "@/components/TimeSlotAdminPanel/TimeSlotAdminPanel";
import { getServerSession } from "next-auth";

export default async function TestCompanies(){

    const session = await getServerSession(authOptions)
    const user = await getUserData(session)

    return (
        <div>
            <CreateNewCompany user={user}/>
            <CompanyAdminPanel/>
        </div>
    )
}