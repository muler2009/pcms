import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/custom.css'
import range from '../../utils/range'
import { getYear, getMonth } from 'date-fns';
import * as Bs from 'react-icons/bs'
import * as Sl from 'react-icons/sl'



const DatePickComponent = ({ className, selected, onChange }) => {
  
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
    
    return (
      <div className="relative flex flex-col items-start justify-start gap-2">  
          <label className={``}>Date of Birth</label>
          <div className="input-sm">
            <Sl.SlCalender className="inline-flex mr-2" />
          <DatePicker 
            className=" text-black font-Poppins focus:outline-none placeholder-transparent border-gray-600 border-gray-30 text-sm w-full"
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className='flex justify-center items-center space-x-2 py-3 bg-transparent pr-3'>
                <Bs.BsFillArrowLeftCircleFill size={25} className="cursor-pointer" onClick={decreaseMonth} disabled={prevMonthButtonDisabled} />
                <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)} className='px-1 active:border-none'>
                  {years.map((option) => (
                    <option key={option} value={option} className='focus:border-none'>
                      {option}
                    </option>
                  ))}
                </select>
                <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
                  {months.map((option) => (
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
            dateFormat='yyyy-MM-dd'            
          />
        </div>
      </div>
    );
  };

export default DatePickComponent