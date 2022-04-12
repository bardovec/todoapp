import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '15px',
    width: '30rem',
  },
  title: {
    padding: '16px 30px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
