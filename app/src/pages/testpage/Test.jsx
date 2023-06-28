import React, { useState } from 'react';
import { useGetUsersQuery } from '../../services/features/user/userSlice';

const Test = () => {
  const { data, isLoading, isSuccess, error } = useGetUsersQuery();

  return (
    <>
      {isLoading && <p>Loading data from backend</p>}
      {isSuccess && (
        data?.map((data, index) => (
          <ul className="" key={index}>
            <li>{data.first_name}</li>
            <li>{data.email}</li>
            <li>{data.date_of_birth}</li>
          </ul>
        ))
      )}
     
    </>
  );
};

export default Test;