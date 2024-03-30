import { render, screen , waitFor } from '@testing-library/react';
import NavBar from '@/components/NavBar/NavBar';
import getUserData from '@/app/libs/getUserData';
import { getServerSession } from 'next-auth';

const getUserDataMock = jest.fn();
const getServerSessionMock = jest.fn();

jest.mock('../src/app/libs/getUserData', () => async () => {return await getUserDataMock()})
jest.mock('next-auth', () => ({getServerSession:async() => getServerSessionMock()}));

describe('NavBar',  () => {
    
     it('should render reservation button for admin user ',async () => {
        
        getServerSessionMock.mockImplementation( async (authOptions:any) =>{
            const data={
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDYyYTcwMDQ3NTAzOTZlM2I1YmI0YSIsInR5cGUiOiJVc2VyIiwiaWF0IjoxNzExNzkzMTc0LCJleHAiOjE3MTQzODUxNzR9.YIRjAK-3Qthj0i5Pm6-aUxgqM4CKpPkbCPuOt9tcmVg",
                "user" : {
                    "role" : "admin"
                }
            }
            return data;
        })

        getUserDataMock.mockImplementation(async (session:any)=>{
            const data= {
                success:true,
                data:{
                    "_id": "66062a7004750396e3b5bb4a",
                    "name": "admin",
                    "email": "admin@gmail.com",
                    "role": "admin",
                    "tel": "0897891234",
                    "imageurl": "https://drive.usercontent.google.com/download?id=1ZJwdRn4YZWioLHBIpa9zTXMzAsFtcf1k&authuser=0",
                    "reservation": [],
                    "__v": 0
                }
            }
            return Promise.resolve(data)
        })
        
        const navBar = await NavBar();
        render(navBar);

        await waitFor(
            ()=>{
                const reservationButton = screen.queryByText('reservation');
                expect(reservationButton).toBeInTheDocument();
            }
        )
    });

    it('should remove sign-in button for admin user ',async () => {

        getServerSessionMock.mockImplementation( async (authOptions:any) =>{
            const data={
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDYyYTcwMDQ3NTAzOTZlM2I1YmI0YSIsInR5cGUiOiJVc2VyIiwiaWF0IjoxNzExNzkzMTc0LCJleHAiOjE3MTQzODUxNzR9.YIRjAK-3Qthj0i5Pm6-aUxgqM4CKpPkbCPuOt9tcmVg",
                "user" : {
                    "role" : "admin"
                }
            }
            return data;
        })

        getUserDataMock.mockImplementation(async (session:any)=>{
            const data= {
                success:true,
                data:{
                    "_id": "66062a7004750396e3b5bb4a",
                    "name": "admin",
                    "email": "admin@gmail.com",
                    "role": "admin",
                    "tel": "0897891234",
                    "imageurl": "https://drive.usercontent.google.com/download?id=1ZJwdRn4YZWioLHBIpa9zTXMzAsFtcf1k&authuser=0",
                    "reservation": [],
                    "__v": 0
                }
            }
            return Promise.resolve(data)
        })


        const navBar = await NavBar();
        render(navBar);

        await waitFor(
            ()=>{
                const signinButton = screen.queryByText('Sign-In');
                expect(signinButton).not.toBeInTheDocument();
            }
        )
    });


    it('should not render reservation button for user ',async () => {

        getServerSessionMock.mockImplementation( async (authOptions:any) =>{
            const data={
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDYyYTcwMDQ3NTAzOTZlM2I1YmI0YSIsInR5cGUiOiJVc2VyIiwiaWF0IjoxNzExNzkzMTc0LCJleHAiOjE3MTQzODUxNzR9.YIRjAK-3Qthj0i5Pm6-aUxgqM4CKpPkbCPuOt9tcmVg",
                "user" : {
                    "role" : "user"
                }
            }
            return data;
        })

        getUserDataMock.mockImplementation(async (session:any)=>{
            const data= {
                success:true,
                data:{
                    "_id": "66062a7004750396e3b5bb4a",
                    "name": "user",
                    "email": "user@gmail.com",
                    "role": "user",
                    "tel": "0897891234",
                    "imageurl": "https://drive.usercontent.google.com/download?id=1ZJwdRn4YZWioLHBIpa9zTXMzAsFtcf1k&authuser=0",
                    "reservation": [],
                    "__v": 0
                }
            }
            return Promise.resolve(data)
        })

        const navBar = await NavBar();
        render(navBar);

        await waitFor(
            ()=>{
                const reservationButton = screen.queryByText('reservation');
                expect(reservationButton).not.toBeInTheDocument();
            }
        )
    });


    it('should not render sign-in button for user ',async () => {

        getServerSessionMock.mockImplementation( async (authOptions:any) =>{
            const data={
                "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDYyYTcwMDQ3NTAzOTZlM2I1YmI0YSIsInR5cGUiOiJVc2VyIiwiaWF0IjoxNzExNzkzMTc0LCJleHAiOjE3MTQzODUxNzR9.YIRjAK-3Qthj0i5Pm6-aUxgqM4CKpPkbCPuOt9tcmVg",
                "user" : {
                    "role" : "user"
                }
            }
            return data;
        })

        getUserDataMock.mockImplementation(async (session:any)=>{
            const data= {
                success:true,
                data:{
                    "_id": "66062a7004750396e3b5bb4a",
                    "name": "user",
                    "email": "user@gmail.com",
                    "role": "user",
                    "tel": "0897891234",
                    "imageurl": "https://drive.usercontent.google.com/download?id=1ZJwdRn4YZWioLHBIpa9zTXMzAsFtcf1k&authuser=0",
                    "reservation": [],
                    "__v": 0
                }
            }
            return Promise.resolve(data)
        })

        const navBar = await NavBar();
        render(navBar);

        await waitFor(
            ()=>{
                const signinButton = screen.queryByText('Sign-In');
                expect(signinButton).not.toBeInTheDocument();
            }
        )
    });


    it('should not render reservation button for guest user ',async () => {

        getServerSessionMock.mockImplementation( async (authOptions:any) =>{
            return null;
        })

        getUserDataMock.mockImplementation(async (session:any)=>{
            return null;
        })

        const navBar = await NavBar();
        render(navBar);

        await waitFor(
            ()=>{
                const reservationButton = screen.queryByText('reservation');
                expect(reservationButton).not.toBeInTheDocument();
            }
        )
    });


    it('should render sign-in button for guest user ',async () => {

        getServerSessionMock.mockImplementation( async (authOptions:any) =>{
            return null;
        })

        getUserDataMock.mockImplementation(async (session:any)=>{
            return null;
        })

        const navBar = await NavBar();
        render(navBar);

        await waitFor(
            ()=>{
                const signinButton = screen.queryByText('Sign-In');
                expect(signinButton).toBeInTheDocument();
            }
        )
    });

});











