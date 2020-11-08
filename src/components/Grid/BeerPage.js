// mui
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
// components
import CardImage from '../CardImage'

const useStyles = makeStyles({
  container: {
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'Open Sans',
    marginBottom: 80,
  },
  root: {
    display: 'inline-block',
    width: '80%',
    marginBottom: 30,
    boxShadow: 'none',
  },
  name: {
    fontSize: 35,
    margin: 10,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 30,
  },
  tagline: {
    fontSize: 17,
    margin: 15,
  },
  description: {
    width: '85%',
    fontSize: 16,
    display: 'inline-block',
  },
  details: {
    marginTop: 12,
    fontSize: 16,
  },
  detailsTitle: {
    fontWeight: 600,
  },
})

const BeerPage = ({ beer }) => {
  const classes = useStyles()
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    description,
    abv,
    ibu,
    ebc,
    srm,
    ph,
    ingredients: { malt, hops, yeast },
    food_pairing,
    brewers_tips,
  } = beer

  return (
    <>
      <Typography className={classes.name}>{name}</Typography>

      <div className={classes.container}>
        <Grid container alignItems='flex-start' justify='center'>
          <Grid item xs={12} md={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardImage image_url={image_url} name={name} />
              </CardActionArea>
              <Typography className={classes.tagline}>{tagline}</Typography>
              <Typography className={classes.description}>
                {description}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
            <div style={{ marginLeft: 40, marginRight: 40 }}>
              <Typography
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  textAlign: 'left',
                  marginBottom: 20,
                }}
              >
                DETAILS:
              </Typography>

              <Typography className={classes.details}>
                <span className={classes.detailsTitle}>First Brewed</span> :
                {first_brewed}
              </Typography>
              <Typography className={classes.details}>
                <span className={classes.detailsTitle}>ABV</span> : {abv}
              </Typography>
              <Typography className={classes.details}>
                <span className={classes.detailsTitle}>IBU</span> : {ibu}
              </Typography>
              <Typography className={classes.details}>
                <span className={classes.detailsTitle}>EBC</span> : {ebc}
              </Typography>
              <Typography className={classes.details}>
                <span className={classes.detailsTitle}>SRM</span> : {srm}
              </Typography>
              <Typography className={classes.details}>
                <span className={classes.detailsTitle}>pH</span> : {ph}
              </Typography>
              <Typography className={classes.details}>
                <div className={classes.detailsTitle}>Malt:</div>
                {malt.map(({ name, amount: { value, unit } }) => (
                  <li key={`${name} - ${value} ${unit}`}>
                    {`${name} - ${value} ${unit}`}{' '}
                  </li>
                ))}
              </Typography>
              <Typography className={classes.details}>
                <div className={classes.detailsTitle}>Hops:</div>
                {hops.map(
                  ({ name, amount: { value, unit }, add, attribute }) => (
                    <li
                      key={`${name}(${value} ${unit}) - ${add} - ${attribute}`}
                    >
                      {`${name}(${value} ${unit}) - ${add} - ${attribute}`}{' '}
                    </li>
                  )
                )}
              </Typography>
              <Typography className={classes.details}>
                <span className={classes.detailsTitle}>Yeast</span> : {yeast}
              </Typography>
              <Typography className={classes.details}>
                <div className={classes.detailsTitle}>Food Pairing:</div>
                {food_pairing.map(pairing => (
                  <li key={pairing}>{pairing}</li>
                ))}
              </Typography>
              <Typography className={classes.details}>
                <div className={classes.detailsTitle}>Brewers Tips:</div>
                {brewers_tips}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default BeerPage
