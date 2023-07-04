import React from 'react';
import { Link } from 'react-router-dom';
const Test = () => {
 
  // const { data, isLoading, isSuccess, error } = useGetUsersQuery();

  // return (
  //   <>
  //     {isLoading && <p>Loading data from backend</p>}
  //     {isSuccess && (
  //       data?.map((data, index) => (
  //         <ul className="" key={index}>
  //           <li>{data.first_name}</li>
  //           <li>{data.email}</li>
  //           <li>{data.date_of_birth}</li>
  //         </ul>
  //       ))
  //     )}
     
  //   </>
  // );
  return(
    <div className='flex flex-col justify-center items-center my-5'>
      <h1 className='font-Oswald text-5xl '>You are logged in</h1>
      <Link to="nested_test" className="text-sm font-Poppins">Click</Link>
      
    </div>
  )
};

export default Test;