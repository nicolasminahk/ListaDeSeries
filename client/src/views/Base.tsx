import React from 'react'
import { Box } from '@mui/material'
import { DataBase } from '../components/DataBase'

const Base = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '98vh',
                overflow: 'hidden',
            }}
        >
            <DataBase />
        </Box>
    )
}

export default Base
