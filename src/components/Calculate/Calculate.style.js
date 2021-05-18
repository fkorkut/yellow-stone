import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  control: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  center: {
    textAlign: "center",
  },

  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calcArea:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  txtHeight:{
    marginRight:15
  },
  messageArea:{
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}),
);