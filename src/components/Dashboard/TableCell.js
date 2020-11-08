import TableRow from '@material-ui/core/TableRow'
import MuiTableCell from '@material-ui/core/TableCell'
import Dialog from '@material-ui/core/Dialog'
import BeerPage from './BeerPage'

const TableCell = ({ beer }) => {
  const handleClick = () => {
    window.location.hash = `#beer${beer.id}`
  }
  return (
    <>
      <TableRow
        style={{ cursor: 'pointer' }}
        key={beer.id}
        onClick={handleClick}
      >
        <MuiTableCell component='th' scope='row'>
          {beer.name}
        </MuiTableCell>
        <MuiTableCell align='right'>{beer.first_brewed}</MuiTableCell>
        <MuiTableCell align='right'>{beer.ph}</MuiTableCell>
        <MuiTableCell align='right'>{beer.volume.value}</MuiTableCell>
        <MuiTableCell align='right'>{beer.likeCount}</MuiTableCell>
      </TableRow>
      <BeerPage beer={beer} />
    </>
  )
}

export default TableCell
