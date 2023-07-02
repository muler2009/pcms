import React from 'react';



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
    <div className='flex justify-center items-center my-5'>
      <h1 className='font-Oswald text-5xl '>You are logged in</h1>
      
    </div>
  )
};

export default Test;