import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CardImage from './CardImage'

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardImage image_url={image_url} name={name} />
        <div className={classes.name}>{name}</div>
      </CardActionArea>
    </Card>
  )
}

export default GridCard
