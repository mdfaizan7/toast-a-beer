import Grid from '@material-ui/core/Grid'

import Layout from '../components/Layout'
import useStore from '../store'
import GridCard from '../components/GridCard'

const Dashboard = () => {
  const { beers } = useStore()

  return (
    <Layout>
      <Grid container alignItems='center' justify='center'>
        {beers &&
          beers.map(beer => (
            <Grid key={beer.id} item xs={6} md={3}>
              <div onClick={() => console.log('clicked')}>
                <GridCard beer={beer} />
              </div>
            </Grid>
          ))}
      </Grid>
    </Layout>
  )
}

export default Dashboard
