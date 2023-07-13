import React from 'react'
import { InnerContainer, OuterContainer } from '../../../../assets/css/Container'
import { ShowDataEntries, TableStructure, TableStructureT } from '../../../../components/Reuseable'
import { MODULE_COLUMN } from '../constants/test'
import { useGetUsersProfileQuery } from '../../../../services/features/user/userApiSlice'
import { Link } from 'react-router-dom'

const UserList = () => {

  const { data: profile, isLoading, isError, isSuccess} = useGetUsersProfileQuery()

  const useAction = (hooks) => {
    // const [statusChenge, setStatusChange] = useState(row.values.moduleStatus)
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 1,
        Header: "status",
        Cell: ({ row }) => {
          const rowData = row.values.moduleStatus;
          console.log(String(rowData));

          return (
            <div className="flex space-x-2 justify-center cursor-pointer">
              {rowData === true ? (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg text-white bg-green-500 disabled:bg-red-500 disabled:text-white`}
                >
                  <Link to={`../new-exam`}>
                    {/* <Gr.GrUnlock size={20} color="white" /> */}
                  </Link>
                </button>
              ) : (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg bg-green-500 disabled:bg-red-500 disabled:text-white`}
                  disabled={!rowData ? true : false}
                >
                  {/* <Go.GoLock size={20} /> */}
                </button>
              )}
            </div>
          );
        },
      },
      {
        id: 2,
        Header: "Upgrade",
        Cell: ({ row }) => {
          return (
            <div className="flex justify-center items-center space-x-2">
              {row.values.moduleStatus === true ? (
                <h1 className={``}> --- </h1>
              ) : (
                <div
                  className={`text-sm flex items-center `}
                  // s
                >
                  <h1
                    className={`text-blue-700 font-Roboto text-sm hover:underline hover:text-blue-600`}
                  >
                    Upgrade
                  </h1>
                </div>
              )}
            </div>
          );
        },
      },
    ]);
  };

  return (
    <OuterContainer className='bg-white w-full px-1 my-1'>
      <InnerContainer className='border-[1px]'>
        {
          isSuccess && (

            <TableStructureT columns={MODULE_COLUMN} data={profile} useAction={useAction}/>
          )
        }
      </InnerContainer>
    </OuterContainer>
  )
}

export default UserList