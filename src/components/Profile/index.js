import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListStatus from '../ListStatus'
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: 8,
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined">
                <AccountCircleIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                  <ListStatus data = {props.data}/>
                </Box>
            </Modal>
        </div>
    );
}