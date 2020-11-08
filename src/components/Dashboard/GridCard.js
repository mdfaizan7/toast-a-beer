import { useState, useEffect } from 'react'
// mui
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'
// icons
import { MdKeyboardBackspace } from 'react-icons/md'
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
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: window.innerWidth > 600 ? 50 : 30,
  },
})

const GridCard = ({ beer }) => {
  const classes = useStyles()
  const { id, name, image_url } = beer

  const [open, setOpen] = useState(window.location.hash === `#beer${id}`)

  useEffect(() => {
    const onHashChange = () => setOpen(window.location.hash === `#beer${id}`)

    window.addEventListener('hashchange', onHashChange)

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [id])

  const handleClickOpen = () => {
    window.location.hash = `#beer${id}`
  }

  const handleClose = () => {
    window.history.back()
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
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'up' }}
      >
        <BeerPage beer={beer} />
        <div className={classes.backBtn} onClick={handleClose}>
          <MdKeyboardBackspace />
        </div>
      </Dialog>
    </div>
  )
}

export default GridCard
