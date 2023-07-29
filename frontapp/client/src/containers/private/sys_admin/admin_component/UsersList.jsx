import React from "react";
import {
  InnerContainer,
  OuterContainer,
} from "../../../../assets/css/Container";
import { TableStructureT } from "../../../../components/Reuseable";
import { MODULE_COLUMN } from "../constants/test";

import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

const UsersList = () => {
  const useAction = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 1,
        Header: "User Action",
        Cell: ({ row }) => {
          return (
            <OuterContainer className="flex flex-row space-x-4 justify-center items-start">
              <div className="w-8 h-8 hover:rounded-full hover:bg-red-700 hover:scale-[1.25] flex justify-center items-center hover:text-white">
                <BsTrash3 />
              </div>
            </OuterContainer>
          );
        },
      },
    ]);
  };

  return (
    <OuterContainer className="w-full px-1 my-1 ">
      <InnerContainer className="border-[1px] mx-4 bg-white">
        <TableStructureT columns={MODULE_COLUMN} useAction={useAction} />
      </InnerContainer>
    </OuterContainer>
  );
};

export default UsersList;
