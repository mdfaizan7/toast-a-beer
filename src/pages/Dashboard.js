import { useState, useEffect } from 'react'
// mui
import Grid from '@material-ui/core/Grid'
import GridCard from '../components/Dashboard/GridCard'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import MuiTableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
// icons
import { MdSearch, MdGridOn, MdGridOff } from 'react-icons/md'
import { BiSort } from 'react-icons/bi'
// components
import Layout from '../components/Layout'
import FilterDialog from '../components/Dashboard/FilterDialog'
// store
import useStore from '../store'
import TableCell from '../components/Dashboard/TableCell'

const Dashboard = () => {
  const beers = useStore(state => state.beers)
  const [list, setList] = useState()
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState([])
  const [viewType, setViewType] = useState('grid')

  useEffect(() => {
    let beersDeepCopy = JSON.parse(JSON.stringify(beers))
    setList(beersDeepCopy)
    // eslint-disable-next-line
  }, [])

  const sortByLikes = () => {
    let sortedList = [...list.sort((a, b) => b.likeCount - a.likeCount)]
    setList(sortedList)
  }

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const handleFilterChange = event => {
    const { checked, value } = event.target

    let ar = [...filters]

    if (checked) {
      ar = [...ar, value]
    } else {
      ar = ar.filter(el => el !== value)
    }

    setFilters(ar)
  }

  const toggleView = () => {
    let newView = viewType === 'grid' ? 'list' : 'grid'
    setViewType(newView)
  }

  const renderView =
    viewType === 'list' ? (
      <TableContainer component={Paper}>
        <Table aria-label='beer table'>
          <TableHead>
            <TableRow>
              <MuiTableCell>Name</MuiTableCell>
              <MuiTableCell align='right'>First Brewed</MuiTableCell>
              <MuiTableCell align='right'>pH</MuiTableCell>
              <MuiTableCell align='right'>ABV</MuiTableCell>
              <MuiTableCell align='right'>Likes</MuiTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list &&
              list.map(beer => {
                let noFilter = filters.length <= 0
                let isFiltered = beer.food_pairing.some(el =>
                  filters.includes(el)
                )

                if (
                  (noFilter || isFiltered) &&
                  beer.name.toLowerCase().includes(search)
                ) {
                  return <TableCell key={beer.id} beer={beer} />
                } else return null
              })}
          </TableBody>
        </Table>
      </TableContainer>
    ) : (
      <Grid container alignItems='center' justify='flex-start'>
        {list &&
          list.map(beer => {
            let noFilter = filters.length <= 0
            let isFiltered = beer.food_pairing.some(el => filters.includes(el))

            if (
              (noFilter || isFiltered) &&
              beer.name.toLowerCase().includes(search)
            ) {
              return (
                <Grid key={beer.id} item xs={6} md={3}>
                  <GridCard beer={beer} />
                </Grid>
              )
            } else return null
          })}
      </Grid>
    )

  return (
    <Layout>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
        spacing={1}
      >
        <Grid item>
          <TextField
            type='text'
            variant='outlined'
            label='Search by name'
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MdSearch size={25} />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>

        <Grid item>
          <Button
            startIcon={viewType === 'grid' ? <MdGridOn /> : <MdGridOff />}
            onClick={toggleView}
          >
            {viewType} view
          </Button>
        </Grid>

        <Grid item>
          <FilterDialog
            clearFilters={() => setFilters([])}
            filters={filters}
            handleChange={handleFilterChange}
          />
        </Grid>

        <Grid item>
          <Button startIcon={<BiSort />} onClick={sortByLikes}>
            Sort By Likes
          </Button>
        </Grid>
      </Grid>

      <br />

      {renderView}
    </Layout>
  )
}

export default Dashboard
