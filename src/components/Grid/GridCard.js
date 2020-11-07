import { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'

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
      <Card className={classes.root} onClick={handleClickOpen}>
        <CardActionArea>
          <CardImage image_url={image_url} name={name} />
          <div className={classes.name}>{name}</div>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'up' }}
      >
        <BeerPage beer={beer} />
      </Dialog>
    </div>
  )
}

export default GridCard
