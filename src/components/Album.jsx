
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useTableProps } from '../hooks/useTableProps';
import TableProps from './table/TableProps';

const tableHead = [
  {
    label: 'id'
  },
  {
    label: 'title'
  },
]


function Album() {
  const { dataSource, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useTableProps(
    {
      resource: 'albums',
    }
  );

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
          </TableRow>
        )
      }}
    />
   </>
  )
}

export default Album