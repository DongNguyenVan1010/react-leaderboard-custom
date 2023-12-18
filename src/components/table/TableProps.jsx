import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination'


function TableProps({ tableHead, dataSource, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, renderRow }) {
  return (
    <>
     <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
         <TableHead>
          <TableRow>
              {tableHead.map(head => (
                <TableCell key={head.label}>{head.label}</TableCell>
              ))}
            </TableRow>
         </TableHead>
         <TableBody>
          {dataSource.map(row => renderRow(row))}
           {/* {dataSource.map((row) => (
             <TableRow
               key={row.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">
                 {row.id}
               </TableCell>
               <TableCell>{row.title}</TableCell>
             </TableRow>
           ))} */}
         </TableBody>
       </Table>
     </TableContainer>
     <TablePagination
       rowsPerPageOptions={[5, 10, 25]}
       component="div"
       count={100}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
    </>
   )
}

export default TableProps