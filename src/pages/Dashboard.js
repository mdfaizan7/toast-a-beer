import { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/Layout'
import useStore from '../store'
import GridCard from '../components/Grid/GridCard'
import { Button } from '@material-ui/core'

import { MdSort } from 'react-icons/md'

const useStyles = makeStyles({})

const Dashboard = () => {
  const { beers, sortByLikes } = useStore()

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
        {beers &&
          beers.map(beer => (
            <Grid key={beer.id} item xs={6} md={3}>
              <GridCard beer={beer} />
            </Grid>
          ))}
      </Grid>
    </Layout>
  )
}

export default Dashboard
