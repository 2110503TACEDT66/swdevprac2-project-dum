'use client'
import styles from './createsession.module.css';
import { Button, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import createNewTimeSlot from '@/app/libs/createNewTimeSlot';

export default function CreateSession() {

  const [selectedDate, setSelectedDate] = useState('10');
  const [startTimeValue , setStartTimeValue] = useState(dayjs('2022-04-17T15:30'))
  const [endTimeValue , setEntTimeValue] = useState(dayjs('2022-04-17T15:30'))
  async function createTimeSlot() {
    
    const description = document.forms[1]['description'].value
    const capacity = document.forms[1]['capacity'].value
    const date = '2022-05-' + selectedDate 
    const startTimeValuee : any = startTimeValue
    const endTimeValuee : any = endTimeValue

    const startTime = (startTimeValuee.$H) + ':' + (startTimeValuee.$m)
    const endTime = (endTimeValuee.$H) + ':' + (endTimeValuee.$m)

    console.log(description , capacity , date , startTime , endTime)
    
    const newTimeSlot =  await createNewTimeSlot(date , startTime , endTime , capacity , description)

    console.log(newTimeSlot)

  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles.CreateSession}>
          <form  name ='newSession' className={styles.CreateSessionCard}>
              <div className={styles.Grid}>
    
              <h2>Description</h2>
              <div className={styles.InputWrapper}>
                <input type="text" name="description"  />
              </div>

              <h2>Capacity</h2>
              <div className={styles.InputWrapper}>
                <input type="number" name='capacity' />
              </div>

                <h2>Date</h2>
                <div className={styles.ButtonWrapper}>
                    <Button className={selectedDate == '10' ? styles.SelectedButton : ''} onClick={() => setSelectedDate('10')}>10/05/2022</Button><Button className={selectedDate == '11' ? styles.SelectedButton : ''} onClick={() => setSelectedDate('11')}>11/05/2022</Button><Button className={selectedDate == '12' ? styles.SelectedButton : ''}onClick={() => setSelectedDate('12')}>12/05/2022</Button><Button className={selectedDate == '13' ? styles.SelectedButton : ''} onClick={() => setSelectedDate('13')}>13/05/2022</Button>
                </div>

                <div className={styles.tempdiv}>  Time : </div>
                <div className={styles.PickerWrapper}>
                  <div className={styles.PickerUnit}>
                      <h2>Start Time</h2>
                      <TimePicker value={startTimeValue} onChange={(newValue : any) => {setStartTimeValue(newValue)}} ampm={false} slotProps={{ textField: { size: 'small' } }} className={styles.timePicker}/>
                  </div>

                  <div className={styles.PickerUnit}>
                      <h2>End Time</h2>
                      <TimePicker value={endTimeValue} onChange={(newValue : any) => setEntTimeValue(newValue)} ampm={false} slotProps={{ textField: { size: 'small' } }} className={styles.timePicker} />
                  </div>
                  
                </div>

                </div>
                <div onClick={() => {createTimeSlot()}} className={styles.SubmitWrapper}><Button>Create new session</Button></div>
            
              
          </form>
        </div>
    </LocalizationProvider>
  );
}


/*

<div className={styles.fullBlock}>
        <div className={styles.topPart}>
          <div className={styles.topicBlock}>
            <div className={styles.date}>Date</div>
            <div className={styles.start}>Start time</div>
            <div className={styles.end}>End time</div>
            <div className={styles.capa}>Capacity</div>
            <div className={styles.desc}>Description</div>
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.rowBlock}>
              <div className={styles.buttonBlock}>
              <Button
                    variant="contained"
                    className={styles.dateButton}
                    style={{
                        backgroundColor: selectedDate === '5/10/2022' ? '#ffb726' : '#F3B02E',
                        boxShadow: selectedDate === '5/10/2022' ? ' 0 0 0 3px #5BA4B4' : 'none'
                    }}
                    onClick={() => setSelectedDate('5/10/2022')}
                >
                    5/10/2022
                </Button>
              </div>
              <div className={styles.buttonBlock}>
              <Button
                    variant="contained"
                    className={styles.dateButton}
                    style={{
                        backgroundColor: selectedDate === '5/11/2022' ? '#ffb726' : '#F3B02E',
                        boxShadow: selectedDate === '5/11/2022' ? ' 0 0 0 3px #5BA4B4' : 'none'
                    }}
                    onClick={() => setSelectedDate('5/11/2022')}
                >
                    5/11/2022
                </Button>
              </div>
              <div className={styles.buttonBlock}>
              <Button
                    variant="contained"
                    className={styles.dateButton}
                    style={{
                        backgroundColor: selectedDate === '5/12/2022' ? '#ffb726' : '#F3B02E',
                        boxShadow: selectedDate === '5/12/2022' ? ' 0 0 0 3px #5BA4B4' : 'none'
                    }}
                    onClick={() => setSelectedDate('5/12/2022')}
                >
                    5/12/2022
                </Button>
              </div>
              <div className={styles.buttonBlock}>
                <Button
                    variant="contained"
                    className={styles.dateButton}
                    style={{
                        backgroundColor: selectedDate === '5/13/2022' ? '#ffb726' : '#F3B02E',
                        boxShadow: selectedDate === '5/13/2022' ? ' 0 0 0 3px #5BA4B4' : 'none'
                    }}
                    onClick={() => setSelectedDate('5/13/2022')}
                >
                    5/13/2022
                </Button>
              </div>
            </div>
            <div className={styles.timePickerBlock}>
            <TimePicker
                className={styles.timePicker}
                defaultValue={dayjs('2022-04-17T15:30')}
            />

            </div>
            <div className={styles.timePickerBlock}>
                <TimePicker className={styles.timePicker}
                    defaultValue={dayjs('2022-04-17T15:30')}
                />
            </div>
            <div className={styles.textFieldBlock}>
                <TextField id="capacity" variant="standard" className={styles.textField}/>
            </div>
            <div className={styles.textFieldBlock}>
                <TextField id="description" variant="standard" className={styles.textField}/>
            </div>
          </div>
        </div>
        <div className={styles.botPart}>
          <div className={styles.createButtonBlock}>
            <Button variant="contained" className={styles.addButton}>
                Create new session
            </Button>
          </div>
        </div>
      </div>

*/