import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  comment: {},
  commentSection: {
    margin: 10,
  },
})

const Comments = ({ comments }) => {
  const classes = useStyles()

  return (
    <div className={classes.commentSection}>
      {comments.map(({ id, body }) => (
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='flex-start'
          spacing={3}
          key={id}
        >
          <Grid item>
            <img
              src='https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg'
              style={{ width: 35, borderRadius: '50%' }}
              alt='profile'
            />
          </Grid>
          <Grid item>{body}</Grid>
        </Grid>
      ))}
    </div>
  )
}

export default Comments
