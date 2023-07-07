import React from "react";

const ShowDataEntries = (props) => {
  const { pageSize, setPageSize } = props;
  return (
    <React.Fragment>
        <div className="flex flex-col">
          <h1 className="font-Roboto py-1">Result</h1>
          <div className={`flex justify-start`}>
            <select
              className="w-full select-sm py-1 px-6 font-Roboto font-semibold text-md"
              type="number"
              value={pageSize}
              onChange={(event) => setPageSize(Number(event.target.value))}
            >
              {[2, 5, 10, 15, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize} className="py-1">
                  {`${pageSize}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      
    </React.Fragment>
  );
};

export default ShowDataEntries;
