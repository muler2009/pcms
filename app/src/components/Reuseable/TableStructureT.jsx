import React, {Fragment} from 'react'
import { 
    useTable,
    useRowSelect,
    usePagination,
    useFilters,
    useGlobalFilter,
} from 'react-table'
import { InnerContainer, OuterContainer } from '../../assets/css/Container'
import ShowDataEntries from './ShowDataEntries'
import Search from './Search';



const TableStructureT = ({ columns, data, useAction }) => {


  // Creating the table with row and columns recieved form props  
  const tableVersionTwoInstance = useTable(
    { 
        columns, data,
        initialState: {
            pageIndex: 0,
            pageSize: 5,
            hiddenColumns: ["lock", "pending"],
        }, 
    },
    useGlobalFilter,
    usePagination,
    useRowSelect
)  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //selectedFlatRows,
    state: { globalFilter, selectedRowIds, pageIndex, pageSize },
   // visibleColumns,
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
    
   } = tableVersionTwoInstance

  return (
    <OuterContainer>
        <InnerContainer className='pt-10 w-full flex space-x-6 px-4 items-center'>
                <ShowDataEntries pageSize={pageSize} setPageSize={setPageSize} className="w-1/4" />
                <ShowDataEntries pageSize={pageSize} setPageSize={setPageSize} className="w-1/4" />        
                <Search
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    title={"Search"}
                    className="flex-grow"
                />  
        </InnerContainer>
        <InnerContainer>
            <table className={`table table-sm table-striped text-left mb-5 text-[14px] px-2 bg-white`} {...getTableProps()} >
                <thead className="capitalize font-normal">
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
  )
}

export default TableStructureT