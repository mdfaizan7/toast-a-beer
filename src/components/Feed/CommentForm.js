import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { MdSend } from 'react-icons/md'
import Fab from '@material-ui/core/Fab'

import useStore from '../../store'

const CommentForm = ({ id }) => {
  const { addComment } = useStore()
  const [comment, setComment] = useState('')
  const [error, setError] = useState(false)

  const handleChange = e => {
    setComment(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (comment.trim() === '') {
      setError('Comment must not be empty')
    } else {
      setError(false)
      addComment(id, comment)
      setComment('')
    }
  }

  return (
    <div>
      <Grid item sm={12} style={{ textAlign: 'center' }}>
        <Grid container spacing={1} alignItems='center' justify='center'>
          <Grid item sm={10}>
            <form onSubmit={handleSubmit}>
              <TextField
                name='body'
                type='text'
                label='Post a Comment...'
                error={error ? true : false}
                helperText={error}
                value={comment}
                onChange={handleChange}
                fullWidth
              />
            </form>
          </Grid>
          <Grid item sm={2}>
            <Fab
              size='medium'
              color='primary'
              aria-label='post'
              onClick={handleSubmit}
            >
              <MdSend style={{ fontSize: 16 }} />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CommentForm
