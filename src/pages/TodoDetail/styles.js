import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  detailCard: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  detailTitle: {

    marginBottom: '10px',
  },
  detailName: {
    borderRadius: '20px',
    backgroundColor: 'lightBlue',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    fontSize: '28px',
  },
}));
