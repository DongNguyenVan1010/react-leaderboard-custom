import React from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

export const useTableProps = ({ resource }) => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const name = location.pathname.split('/')[1];
  const paramPage = parseInt(searchParams.get('_page'), 10) || 0;
  const paramRowsPerPage = parseInt(searchParams.get('_limit'), 10) || 5;
  // states
  const [dataSource, setDataSource  ] = React.useState([]);
  const [page, setPage] = React.useState(paramPage);
  const [rowsPerPage, setRowsPerPage] = React.useState(paramRowsPerPage);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=${rowsPerPage}&_page=${page + 1}`)
      .then(response => response.json())
      .then(json => setDataSource(json))
  }, [page, rowsPerPage, resource])

  function handleChangePage(_, page) {
    navigate(`/${name}?_page=${page}&_limit=${rowsPerPage}`)
    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    navigate(`/${name}?_page=${page}&_limit=${event.target.value}`)
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