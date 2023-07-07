import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/custom.css'
import range from '../../utils/range'
import { getYear, getMonth } from 'date-fns';
import * as Bs from 'react-icons/bs'
import * as Sl from 'react-icons/sl'



const DatePickerComponent = ({ className, selected, onChange }) => {
  
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
    
    return (
      <div className="relative peer">
        <div className="border-b-2 border-black -px-2 peer">
          <Sl.SlCalender className="inline-flex mr-2" />
          <label className={`font-Poppins text-sm absolute -top-3.5 text-gray-500 transition-all peer-focus:text-sm ${selected ? "-top-3.5" : "top-2"} ${selected ? "peer-placeholder-shown:text-base peer-placeholder-shown:top-2" : "peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 left-6"}`}>
            Date of Birth
          </label>
          <DatePicker 
            className="peer h-10 text-black font-Poppins focus:outline-none placeholder-transparent border-gray-600 border-gray-30 text-sm w-full"
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
            isClearable
            dateFormat='dd/MM/yyyy'            
          />
        </div>
      </div>
    );
  };

export default DatePickerComponent