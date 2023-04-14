import { useState } from 'react';

import { Box, Button, Modal } from '@mui/material';

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
                <Box
                    className='horse-pic'
                >
                    <img
                        style={{
                            width: 200
                        }}
                        src={`/images/horse_pics/${Math.floor(Math.random() * 27)}.jpg`}
                    />
                    <Button
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Box>
            </Modal>
        </>
    )

}

export default Gimme;