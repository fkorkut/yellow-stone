import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop:15
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
     // color: theme.palette.text.secondary,
    },
  }),
);