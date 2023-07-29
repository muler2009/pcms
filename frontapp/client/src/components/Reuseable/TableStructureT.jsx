import React, { Fragment } from "react";
import {
  useTable,
  useRowSelect,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";
import { InnerContainer, OuterContainer } from "../../assets/css/Container";
import ShowDataEntries from "./ShowDataEntries";
import Search from "./Search";

const TableStructureT = ({ columns, data, useAction }) => {
  // Creating the table with row and columns recieved form props
  const tableVersionTwoInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 5,
        hiddenColumns: ["lock", "pending"],
      },
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useAction
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //selectedFlatRows,
    state: { globalFilter, selectedRowIds, pageIndex, pageSize },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    // page,
    // previousPage,
    // nextPage,
    // pageCount,
    // canNextPage,
    // canPreviousPage,
    setPageSize,
    //pageOptions,
    // gotoPage,
  } = tableVersionTwoInstance;

  return (
    <OuterContainer className="flex flex-col gap-2 pt-10 w-full">
      <InnerContainer className="flex space-x-6 px-4 items-center">
        <div className="flex space-x-7">
          <div className="">
            <ShowDataEntries pageSize={pageSize} setPageSize={setPageSize} />
          </div>
          {/* <div className="w-2/4"><ShowDataEntries pageSize={pageSize} setPageSize={setPageSize}/></div>                   */}
        </div>
        <div className="flex-1">
          <Search
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            preGlobalFilteredRows={preGlobalFilteredRows}
            title={"Search"}
            className="w-full"
          />
        </div>
      </InnerContainer>
      <InnerContainer className="mx-5 h-full">
        <table
          className={`table table-sm table-striped table-border text-left mb-5 text-[14px]`}
          {...getTableProps()}
        >
          <thead className="capitalize font-normal">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().index} {...row.getRowProps()}>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </InnerContainer>
    </OuterContainer>
  );
};

export default TableStructureT;
