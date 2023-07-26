import React from "react";
import {
  InnerContainer,
  OuterContainer,
} from "../../../../assets/css/Container";
import { TableStructureT } from "../../../../components/Reuseable";
import { MODULE_COLUMN } from "../constants/test";
import { useGetUsersProfileQuery } from "../../../../services/features/user/userApiSlice";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

const UsersList = () => {
  const {
    data: profile,
    isLoading,
    isError,
    isSuccess,
  } = useGetUsersProfileQuery();

  const useAction = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 1,
        Header: "User Action",
        Cell: ({ row }) => {
          //   const rowData = row.values.moduleStatus;
          //   console.log(String(rowData));

          return (
            <OuterContainer className="flex flex-row space-x-4 justify-center items-start">
              <div className="w-8 h-8 hover:rounded-full hover:bg-red-700 hover:scale-[1.25] flex justify-center items-center hover:text-white">
                <BsTrash3 />
              </div>
            </OuterContainer>
          );
        },
      },
      // {
      //   id: 2,
      //   Header: "Upgrade",
      //   Cell: ({ row }) => {
      //     return (
      //       <div className="flex justify-center items-center space-x-2">
      //         {row.values.moduleStatus === true ? (
      //           <h1 className={``}> --- </h1>
      //         ) : (
      //           <div
      //             className={`text-sm flex items-center `}
      //             // s
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
    <OuterContainer className="w-full px-1 my-1 ">
      <InnerContainer className="border-[1px] mx-4 bg-white">
        {isSuccess && (
          <TableStructureT
            columns={MODULE_COLUMN}
            data={profile}
            useAction={useAction}
          />
        )}
      </InnerContainer>
    </OuterContainer>
  );
};

export default UsersList;
