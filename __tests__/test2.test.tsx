import { render, screen , waitFor} from '@testing-library/react';
import CompanyPanel from '@/components/CompanyPanel/CompanyPanel';

const mockUser={
    "success": true,
    "data": {
        "_id": "6607cb5f3b35b8ae7c354a79",
        "name": "",
        "email": "userrr@gmail.com",
        "role": "user",
        "tel": "",
        "imageurl": "https://drive.usercontent.google.com/download?id=1ZJwdRn4YZWioLHBIpa9zTXMzAsFtcf1k&authuser=0",
        "reservation": [],
        "__v": 0
    }
}

const mockResult={
    "success": true,
    "count": 3,
    "data": [
        {
            "_id": "6607ca813b35b8ae7c354a64",
            "name": "Company",
            "address": "Samyan",
            "website": "www.company.com",
            "description": "start up company",
            "tel": "0811231234",
            "contact_email": "company@gmail.com",
            "imageurl": "https://drive.usercontent.google.com/download?id=1ZJwdRn4YZWioLHBIpa9zTXMzAsFtcf1k&amp;authuser=0",
            "timeslot": [],
            "role": "company",
            "__v": 0
        },
        {
            "_id": "66062ca504750396e3b5bb75",
            "name": "Yen",
            "address": "",
            "website": "",
            "description": "",
            "tel": "",
            "contact_email": "",
            "imageurl": "https://drive.google.com/uc?id=1glL1RmdkdVSUDOmqxQvz6L3_5f2bgPpj",
            "timeslot": [],
            "role": "company",
            "__v": 0
        },
        {
            "_id": "66062c8704750396e3b5bb66",
            "name": "aun",
            "address": "aun",
            "website": "www.a.com",
            "description": "aun",
            "tel": "1231234123",
            "contact_email": "aun@gmail.com",
            "imageurl": "https://drive.google.com/uc?id=1glL1RmdkdVSUDOmqxQvz6L3_5f2bgPpj",
            "timeslot": [
                {
                    "_id": "66062ccf04750396e3b5bb9b",
                    "company": "66062c8704750396e3b5bb66",
                    "date": "2022-05-10T00:00:00.000Z",
                    "startTime": "15:30",
                    "endTime": "15:45",
                    "capacity": 1,
                    "reservation": [
                        "66062cf804750396e3b5bbe0"
                    ],
                    "description": "Asasad",
                    "__v": 0
                },
                {
                    "_id": "66062cd204750396e3b5bba6",
                    "company": "66062c8704750396e3b5bb66",
                    "date": "2022-05-10T00:00:00.000Z",
                    "startTime": "15:30",
                    "endTime": "15:45",
                    "capacity": 2,
                    "reservation": [
                        "66062cf904750396e3b5bbf1"
                    ],
                    "description": "ADSA",
                    "__v": 0
                }
            ],
            "role": "company",
            "__v": 0
        }
    ]
}



describe('Company Panel',()=>{
    it('should have 3 company block', async () =>{
        const companyPanel = await  CompanyPanel({allCompanies:mockResult,thisUser:mockUser});
        render(companyPanel)
        await waitFor(
            ()=>{
                const companyBlock = screen.queryAllByTestId('CompanyBlock')
                expect(companyBlock.length).toBe(3)
            }
        )
    })

    it('should have company detail when click expand',async()=>{
        const companyPanel = await  CompanyPanel({allCompanies:mockResult,thisUser:mockUser});
        render(companyPanel)

    })
})