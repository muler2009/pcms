import React from 'react'
import { InnerContainer, OuterContainer } from '../../../../assets/css/Container'
import { ShowDataEntries, TableStructure, TableStructureT } from '../../../../components/Reuseable'
import { MODULE_COLUMN, data } from '../constants/test'

const UserList = () => {
  return (
    <OuterContainer className='bg-white w-full px-1 my-1'>
      <InnerContainer className='border-[1px]'>
        <TableStructureT columns={MODULE_COLUMN} data={data}/>
      </InnerContainer>
    </OuterContainer>
  )
}

export default UserList