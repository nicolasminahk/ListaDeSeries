import { Box, Button, Divider, Input, TextField } from '@mui/material'
import React from 'react'

const Connect = () => {
    return (
        <>
            <Box sx={{ width: '100%', borderColor: 'black' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', m: '10px', width: '50%' }}>
                    <TextField label="Servidor / Host" sx={{ m: '10px' }}>
                        {' '}
                    </TextField>
                    <TextField label="Puerto" sx={{ m: '10px' }}>
                        {' '}
                    </TextField>
                    <TextField label="Base de Datos" sx={{ m: '10px' }}>
                        {' '}
                    </TextField>
                    <TextField label="Usuario" sx={{ m: '10px' }}>
                        {' '}
                    </TextField>
                    <TextField label="Contraseña" sx={{ m: '10px' }}>
                        {' '}
                    </TextField>
                </Box>
                <Button>Conectar</Button>
                <Button>Salir</Button>
            </Box>
        </>
    )
}

export default Connect
