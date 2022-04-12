import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  photoImg: {
    borderRadius: '40px',
    width: '15rem'
  },
  mainPhoto: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  photoTitle: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '15px',
    width: '25rem',
  }

}));
