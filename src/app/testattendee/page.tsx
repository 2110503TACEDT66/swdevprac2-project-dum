import AttendeePanel from "@/components/AttendeePanel/AttendeePanel"
import Session from "@/components/Session/Session"
import SessionPanel from "@/components/SessionPanel/SessionPanel"

export default function TestAttendee(){
    return(
        <div>
            {/* <Session date={new Date('2023-03-24')} time="14:00" currentCapacity={2} maxCapacity={3} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.... "/> */}
            <SessionPanel/>
        </div>
    )
}