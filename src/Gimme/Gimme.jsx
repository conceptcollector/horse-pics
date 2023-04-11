import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function Gimme() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <input
                type="image"
                src="/images/Henry's_horse_pics.jpg"
                style={{
                    width: 100
                }}
                onClick={handleOpen}
            />

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box>
                    <img
                        style={{
                            width: 200
                        }}
                        src={`/images/horse_pics/${Math.floor(Math.random() * 26)}.jpg`}
                    />
                </Box>
            </Modal>
        </>
    )

}

export default Gimme;