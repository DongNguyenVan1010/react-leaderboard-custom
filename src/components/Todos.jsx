
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import { useTableProps } from '../hooks/useTableProps';
import TableProps from './table/TableProps';
import { useNavigate } from 'react-router';


const tableHead = [
  {
    label: 'id'
  },
  {
    label: 'title'
  },
  {
    label: 'completed'
  },
  {
    label: 'actions'
  }
]

function Todos() {
  const navigate = useNavigate();
  const { dataSource, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useTableProps(
    {
      resource: 'todos',
    }
  );

    // normal function
  // function gotoDetail(id){
  //   navigate(`/todo/${id}`)
  // }

  // curry function
  // const gotoDetail = id => () => {
  //   navigate(`/todo/${id}`)
  // } 
  function gotoDetail(id) {
    return () => {
      navigate(`/todo/${id}`)
    }
  }

  return (
   <>
    <TableProps 
      tableHead={tableHead}
      dataSource={dataSource}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      renderRow={row => {
        return (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.completed ? 'true' : 'false'}</TableCell>
            <TableCell>
              {/* <Button variant="contained" onClick={() => gotoDetail(row.id)}>View Detail</Button> */}
              <Button variant="contained" onClick={gotoDetail(row.id)}>View Detail</Button> 
            </TableCell>
          </TableRow>
        )
      }}
    />
   </>
  )
}

export default Todos
