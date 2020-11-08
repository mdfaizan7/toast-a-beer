import { useState, useEffect } from 'react'
// mui
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// icons
import { MdFilterList } from 'react-icons/md'
// store
import useStore from '../../store'

const FilterDialog = ({ handleChange, filters, clearFilters }) => {
  const foodPairings = useStore(state => state.foodPairings)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handlClearFilters = () => {
    clearFilters()
    setOpen(false)
  }

  return (
    <div>
      <Button startIcon={<MdFilterList />} onClick={handleOpen}>
        Filter by food pairing
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Food pairing Filter Options
        </DialogTitle>
        <DialogContent>
          <Grid container justify='flex-start' alignItems='center'>
            {foodPairings.map(pair => (
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={pair}
                      checked={filters.includes(pair)}
                      onChange={handleChange}
                    />
                  }
                  label={pair}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlClearFilters} color='primary'>
            Clear Filters
          </Button>
          <Button onClick={handleClose} color='primary'>
            Filter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FilterDialog
