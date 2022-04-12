import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: 'rgba(0,183,255, 1)',
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  image: {
    marginLeft: '15px',
    marginRight: '15px',
  },
  btn: {
    marginRight: '15px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',

  },
}));
