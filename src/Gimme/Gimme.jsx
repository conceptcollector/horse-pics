import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Card, CardActions, CardContent, Modal } from '@mui/material';

function Gimme() {

    const [ open, setOpen ] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <input
                type="image"
// this image was created by u/FluorescentHorror on Reddit and is used with their blessing
                src="/images/Henry_Horse_Pics.jpg"
                style={{
                    width: 100
                }}
                onClick={
                    handleOpen;
                    dispatch({
                        type: 'FETCH_HORSE_PIC',
                        payload: {${Math.floor(Math.random() * 26)}}
                    })
                }
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
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <CardContent>
                        <img
                            style={{
                                width: 200,
                                margin: 'auto'
                            }}
                            // src={`/images/horse_pics/${Math.floor(Math.random() * 26)}.jpg`}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            style={{
                                margin: 'auto'
                            }}
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