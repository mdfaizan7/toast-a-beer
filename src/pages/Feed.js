import { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/Layout'
import BeerCard from '../components/Feed/BeerCard'

import useStore from '../store'

const Feed = () => {
  const { fetchRandom, beers } = useStore()

  useEffect(() => {
    fetchRandom()

    const interval = setInterval(() => {
      fetchRandom()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <Grid container alignItems='center' justify='center'>
        {beers &&
          beers.map(beer => (
            <Grid item xs={12} md={6}>
              <BeerCard beer={beer} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  )
}

export default Feed
