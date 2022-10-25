import { Box, Button, TextField, Dialog, Typography, ButtonGroup } from '@mui/material'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Connect: FC = () => {
    const [host, setHost] = React.useState('')
    const [puerto, setPuerto] = React.useState('')
    const [base, setBase] = React.useState('')
    const [user, setUser] = React.useState('')
    const [contra, setContra] = React.useState('')
    const [modal, setModal] = React.useState(false)

    const navigate = useNavigate()
    return (
        <>
            <Box
                sx={{
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: '2%',
                        width: '50%',
                    }}
                >
                    <TextField label="Servidor / Host" sx={{ m: '10px' }} onChange={(e) => setHost(e.target.value)} />
                    <TextField label="Puerto" sx={{ m: '10px' }} onChange={(e) => setPuerto(e.target.value)} />
                    <TextField label="Base de Datos" sx={{ m: '10px' }} onChange={(e) => setBase(e.target.value)} />
                    <TextField label="Usuario" sx={{ m: '10px' }} onChange={(e) => setUser(e.target.value)} />
                    <TextField label="Contraseña" sx={{ m: '10px' }} onChange={(e) => setContra(e.target.value)} />
                </Box>
                <ButtonGroup variant="contained">
                    <Button
                        onClick={() => {
                            puerto && host && user && base && contra ? navigate('/base') : setModal(true)
                        }}
                    >
                        Conectar
                    </Button>
                    <Button onClick={() => navigate('/fin')}>Salir</Button>
                </ButtonGroup>
            </Box>
            <Dialog open={modal} onClose={() => setModal(false)}>
                <Box display="flex" alignContent="center" sx={{ m: '2%' }}>
                    <Typography>Complete todos los campos para continuar</Typography>
                </Box>
            </Dialog>
        </>
    )
}
