import { useState } from 'react';

import { Button, Card, CardActions, CardContent, Modal } from '@mui/material';

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
                <Card
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 200
                    }}
                >
                    <CardContent>
                        <img
                            style={{
                                width: 200
                            }}
                            src={`/images/horse_pics/${Math.floor(Math.random() * 27)}.jpg`}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </>
    )

}

export default Gimme;