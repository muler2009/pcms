import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/custom.css'
import range from '../../utils/range'
import { getYear, getMonth } from 'date-fns';
import * as Bs from 'react-icons/bs'
import useRegister from '../../hooks/useRegister';


const DatePickerComponent = ({ className, selected, onChange }) => {
  const { register, handleDateChange } = useRegister()
  const [startDate, setStartDate] = useState(null)
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
  
  return (
    
    <DatePicker 
        className={className}
        renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
        }) => (
            <div className='flex justify-center items-center space-x-2 py-3'>
                <Bs.BsFillArrowLeftCircleFill size={25} className="cursor-pointer" onClick={decreaseMonth} disabled={prevMonthButtonDisabled} />
                <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)} className='px-1 active:border-none'>
                        {
                            years.map((option) => (
                                <option key={option} value={option} className='focus:border-none'>
                                    {option}
                                </option>
                        ))}
                </select>

                <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
                    {
                        months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                    ))}
                </select>
                <Bs.BsArrowRightCircleFill size={25} className="cursor-pointer" onClick={increaseMonth} disabled={nextMonthButtonDisabled} />

            </div>
        )}
        selected={selected}
        onChange={onChange}
        isClearable
        dateFormat='dd/MM/yyyy'            
    />
    
  )
}

export default DatePickerComponent