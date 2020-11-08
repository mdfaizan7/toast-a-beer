import { useState, useEffect } from 'react'
// mui
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import GridCard from '../components/Grid/GridCard'
import Button from '@material-ui/core/Button'
// icons
import { MdSort } from 'react-icons/md'
// components
import Layout from '../components/Layout'
// store
import useStore from '../store'

const useStyles = makeStyles({})

const Dashboard = () => {
  const beers = useStore(state => state.beers)
  const [list, setList] = useState()

  useEffect(() => {
    setList([...beers])
    // eslint-disable-next-line
  }, [])

  const sortByLikes = () => {
    let sortedList = [...list.sort((a, b) => b.likeCount - a.likeCount)]
    setList(sortedList)
  }

  return (
    <Layout>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
      >
        <Grid item></Grid>
        <Grid item>
          <Button startIcon={<MdSort />} onClick={sortByLikes}>
            Sort By Likes
          </Button>
        </Grid>
      </Grid>
      <br />
      <Grid container alignItems='center' justify='center'>
        {list &&
          list.map(beer => (
            <Grid key={beer.id} item xs={6} md={3}>
              <GridCard beer={beer} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  )
}

export default Dashboard
