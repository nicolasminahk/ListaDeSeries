import { Box, Button, Divider, Input, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

const Connect = () => {
    const [host, setHost] = React.useState('')
    const [puerto, setPuerto] = React.useState('')
    const [base, setBase] = React.useState('')
    const [user, setUser] = React.useState('')
    const [contra, setContra] = React.useState('')
    const [modal, setModal] = React.useState(false)

    const handlePuerto = (date: any) => {
        setPuerto(date)
    }

    const handleBase = (date: any) => {
        setBase(date)
    }

    const handleHost = (date: any) => {
        setHost(date)
    }
    const handleUser = (date: any) => {
        setUser(date)
    }

    const handleContra = (date: any) => {
        setContra(date)
    }

    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ width: '100%', borderColor: 'black' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', m: '10px', width: '50%' }}>
                    <TextField label="Servidor / Host" sx={{ m: '10px' }} onChange={(e) => handleHost(e.target.value)}>
                        {' '}
                    </TextField>
                    <TextField label="Puerto" sx={{ m: '10px' }} onChange={(e) => handlePuerto(e.target.value)}>
                        {' '}
                    </TextField>
                    <TextField label="Base de Datos" sx={{ m: '10px' }} onChange={(e) => handleBase(e.target.value)}>
                        {' '}
                    </TextField>
                    <TextField label="Usuario" sx={{ m: '10px' }} onChange={(e) => handleUser(e.target.value)}>
                        {' '}
                    </TextField>
                    <TextField label="Contraseña" sx={{ m: '10px' }} onChange={(e) => handleContra(e.target.value)}>
                        {' '}
                    </TextField>
                </Box>
                <Button
                    onClick={() => {
                        puerto && host && user && base && contra ? navigate('/base') : setModal(true)
                    }}
                >
                    Conectar
                </Button>
                <Button onClick={() => navigate('/fin')}>Salir</Button>
            </Box>
            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <Typography>Complete todos los campos para continuar</Typography>
                </Box>
            </Modal>
        </>
    )
}

export default Connect
