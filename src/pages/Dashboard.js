import { useState, useEffect } from 'react'
// mui
import Grid from '@material-ui/core/Grid'
import GridCard from '../components/Dashboard/GridCard'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
// icons
import { MdSearch } from 'react-icons/md'
import { BiSort } from 'react-icons/bi'
// components
import Layout from '../components/Layout'
import FilterDialog from '../components/Dashboard/FilterDialog'
// store
import useStore from '../store'

const Dashboard = () => {
  const beers = useStore(state => state.beers)
  const [list, setList] = useState()
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState([])

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

  console.log(filters)

  return (
    <Layout>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
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
    </Layout>
  )
}

export default Dashboard
