// mui
import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'
// icons
import { FcLike } from 'react-icons/fc'
// components
import CardImage from '../CardImage'
import CommentForm from './CommentForm'
import Comments from './Comments'
// store
import useStore from '../../store'

const useStyles = makeStyles({
  root: {
    maxWidth: window.innerWidth > 600 ? 500 : 345,
    margin: 20,
    fontFamily: 'Open Sans',
    borderRadius: 20,
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

const BeerCard = ({ beer }) => {
  const classes = useStyles()
  const { likeBeer } = useStore()
  const { id, name, image_url, description, likeCount, comments } = beer

  return (
    <Grow in>
      <Card className={classes.root}>
        <CardActionArea>
          <CardImage image_url={image_url} name={name} />
          <CardContent>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'
            >
              <Grid item xs={9}>
                <Typography className={classes.name}>{name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Tooltip title='Give a like!'>
                  <IconButton onClick={() => likeBeer(id)}>
                    <FcLike />
                  </IconButton>
                </Tooltip>
                {likeCount}
              </Grid>
            </Grid>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'block', margin: '0 20px 20px 20px' }}>
          <CommentForm id={id} />
          <Comments comments={comments} />
        </CardActions>
      </Card>
    </Grow>
  )
}

export default BeerCard
