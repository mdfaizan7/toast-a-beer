// mui
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'
// components
import CardImage from '../CardImage'
import BeerPage from './BeerPage'

const useStyles = makeStyles({
  root: {
    width: window.innerWidth > 600 ? 240 : 150,
    fontFamily: 'Open Sans',
    marginBottom: 30,
  },
  name: {
    margin: 8,
    fontSize: 15,
  },
})

const GridCard = ({ beer }) => {
  const classes = useStyles()
  const { id, name, image_url } = beer

  const handleClickOpen = () => {
    window.location.hash = `#beer${id}`
  }

  return (
    <div>
      <Grow in>
        <Card className={classes.root} onClick={handleClickOpen}>
          <CardActionArea>
            <CardImage image_url={image_url} name={name} />
            <Typography className={classes.name}>{name}</Typography>
          </CardActionArea>
        </Card>
      </Grow>
      <BeerPage beer={beer} />
    </div>
  )
}

export default GridCard
