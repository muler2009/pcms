import React from 'react'
import { Link } from 'react-router-dom';
import * as GrIcons from 'react-icons/gr'
import * as GoIcons from 'react-icons/go'
import { TableStructure } from '../../../../components/Reuseable';
import { MODULE_COLUMN, data } from '../constants/test';

const Users = () => {

  const useAction = (hooks) => {
    // const [statusChenge, setStatusChange] = useState(row.values.moduleStatus)
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 1,
        Header: "lock",
        Cell: ({ row }) => {
          const rowData = row.values.lock;

          return (
            <div className="flex space-x-2 justify-center cursor-pointer">
              {rowData === "unlocked" ? (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg text-white bg-green-500 disabled:bg-red-500 disabled:text-white`}
                >
                  <Link to={`../new-exam`}>
                    <GrIcons.GrUnlock size={20} color="white" />
                  </Link>
                </button>
              ) : (
                <button
                  className={`btn-sm px-2 cursor-pointer rounded-lg bg-yellow-500 disabled:bg-red-500 disabled:text-white`}
                  disabled={row.values?.payment === "Not Subscribed"}
                >
                  <GoIcons.GoLock size={20} />
                </button>
              )}
            </div>
          );
        },
      },
      // {
      //   id: 2,
      //   Header: "Upgrade",
      //   Cell: ({ row }) => {
      //     return (
      //       <div className="flex justify-center items-center space-x-2">
      //         {row.values.payment === "Free" ? (
      //           <h1 className={``}> --- </h1>
      //         ) : row.values.payment === "Pending" ? (
      //           <h1 className={``}> Pending </h1>
      //         ) : row.values.payment === "Paid" ? (
      //           <h1 className={``}> --- </h1>
      //         ) : (
      //           <div
      //             className={`text-sm flex items-center `}
      //             onClick={() => getDataSelected(row.values)}
      //           >
      //             <h1
      //               className={`text-blue-700 font-Roboto text-sm hover:underline hover:text-blue-600`}
      //             >
      //               Upgrade
      //             </h1>
      //           </div>
      //         )}
      //       </div>
      //     );
      //   },
      // },
    ]);
  };
  return (
    <TableStructure
        columns={MODULE_COLUMN}
        data={data}
        useAction={useAction}
    />
  )
}

export default Users;