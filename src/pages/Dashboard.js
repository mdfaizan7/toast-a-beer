import { useState, useEffect } from 'react'
// mui
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import GridCard from '../components/Grid/GridCard'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
// icons
import { MdSort, MdSearch } from 'react-icons/md'
// components
import Layout from '../components/Layout'
// store
import useStore from '../store'

const useStyles = makeStyles({})

const Dashboard = () => {
  const beers = useStore(state => state.beers)
  const [list, setList] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    let beersDeepCopy = JSON.parse(JSON.stringify(beers))
    setList(beersDeepCopy)
    // eslint-disable-next-line
  }, [])

  const sortByLikes = () => {
    let sortedList = [...list.sort((a, b) => b.likeCount - a.likeCount)]
    setList(sortedList)
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

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
            onChange={handleChange}
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
          <Button startIcon={<MdSort />} onClick={sortByLikes}>
            Sort By Likes
          </Button>
        </Grid>
      </Grid>
      <br />
      <Grid container alignItems='center' justify='flex-start'>
        {list &&
          list.map(beer => {
            if (beer.name.toLowerCase().includes(search)) {
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
