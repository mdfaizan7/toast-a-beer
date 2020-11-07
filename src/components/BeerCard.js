import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { FcLike } from 'react-icons/fc'
import useStore from '../store'
import CardImage from './CardImage'

const useStyles = makeStyles({
  root: {
    maxWidth: window.innerWidth > 600 ? 500 : 345,
    margin: 20,
    fontFamily: 'Open Sans',
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
  const { id, name, image_url, description, likeCount } = beer

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardImage image_url={image_url} name={name} />
        <CardContent>
          <div className={classes.name}>{name}</div>
          <div className={classes.description}>{description}</div>
          <Tooltip title='Give a like!'>
            <IconButton onClick={() => likeBeer(id)}>
              <FcLike />
            </IconButton>
          </Tooltip>
          <span>{likeCount} likes</span>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BeerCard
