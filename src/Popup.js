import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Popup=(a) => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(a.q)
  const handleClose = () => {
    
 
    window.location=a.q;
    setOpen(false);
};

  return (
    <div>
      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{a.m}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {a.g}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="primary" autoFocus>
        OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Popup;