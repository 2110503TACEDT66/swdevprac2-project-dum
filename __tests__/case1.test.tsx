import NavBar from "@/components/NavBar/NavBar";
import {render , screen} from '@testing-library/react'

describe('TopMenu', () => { 
  it('Should Have Text' , () => {
    render(<NavBar/>)
    console.log(NavBar)
    // const Text = screen.getByText('Profile')

    // expect(Text).toBeInTheDocument()

  })
 })