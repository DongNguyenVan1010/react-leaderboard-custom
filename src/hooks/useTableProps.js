import React from 'react';

export const useTableProps = ({ resource }) => {
  const [dataSource, setDataSource  ] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=${rowsPerPage}&_page=${page + 1}`)
      .then(response => response.json())
      .then(json => setDataSource(json))
  }, [page, rowsPerPage, resource])

  function handleChangePage(_, page) {
    setPage(page)
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value)
  }

  return {
    dataSource,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage
  }

}