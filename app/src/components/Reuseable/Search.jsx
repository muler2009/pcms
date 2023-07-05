import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { OuterContainer } from '../../assets/css/Container'


const Search = (props) => {

    const { globalFilter, setGlobalFilter, preGlobalFilteredRows, title } = props

    const totalRows = preGlobalFilteredRows.length
    const [searchResult, setSearchResult] = useState(globalFilter)
    const onChange = useAsyncDebounce(searchResult => {
        setGlobalFilter(searchResult || undefined)
    }, 1000)

    return(
        <OuterContainer className={`flex items-center space-x-2`}>
            <label htmlFor="search" className={`font-Poppins text-md`}>{title}:</label>
            <input 
                type='text'
                id='search' 
                name='search'
                className='input-sm'
                placeholder={`${totalRows} records `}
                value={searchResult || ''}
                onChange={(event) => {
                    setSearchResult(event.target.value)
                    onChange(event.target.value)
                }}
            />
        </OuterContainer>           
    )
}

export default Search;