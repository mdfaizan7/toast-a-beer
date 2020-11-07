import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    maxWidth: window.innerWidth > 600 ? 500 : 345,
    margin: 20,
    fontFamily: 'Open Sans',
  },
  cardImage: {
    paddingTop: '56.25%',
    backgroundSize: 'cover',
    position: 'absolute',
    width: '100%',
    top: 0,
    opacity: 0.5,
    filter: 'blur(10px)',
  },
  media: {
    paddingTop: '56.25%',
    backgroundSize: 'contain',
    opacity: 0,
  },
  test: {
    paddingTop: '56.25%',
    backgroundSize: 'cover',
    position: 'absolute',
    width: '100%',
    top: 0,
    opacity: 0.5,
    filter: 'blur(10px)',
  },
  tested: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingTop: '56.25%',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingTop: '56.25%',
    overflow: 'hidden',
    justifyContent: 'center',
    display: 'flex',
  },
  image: {
    height: '100%',
    width: 'auto',
    position: 'absolute',
    top: 0,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 600,
  },
  description: {
    fontSize: 15,
    lineHeight: 1.1,
  },
  actions: {
    fontSize: 16,
  },
})

const GridCard = ({ beer }) => {
  const classes = useStyles()
  const { id, name, image_url } = beer

  const imageSrc = image_url
    ? image_url
    : 'https://images.punkapi.com/v2/keg.png'

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageSrc} title={name} />
        <div className={classes.tested}>
          <CardMedia className={classes.test} image={imageSrc} title={name} />
        </div>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={imageSrc}
            title={name}
            alt={name}
          />
        </div>
        asasdklajds
      </CardActionArea>
    </Card>
  )
}

export default GridCard
