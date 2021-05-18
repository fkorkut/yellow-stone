import React ,{useEffect} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = '50';
  const left = '50';

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);
export const UIModal = (props) => {
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

 useEffect(() => {
    setOpen(props.open);
 }, [props.open])
 
 
  const onCloseModal=()=>{
    
    setOpen(false);
    props.handleClose(false);
 }




  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
    <div style={modalStyle} className={classes.paper}>
  
      {props.children}
    </div>
      
    </Modal>
  );
};

UIModal.propTypes = {
    handleClose:PropTypes.func
}

UIModal.defaultProps={
    handleClose:()=>{}
}