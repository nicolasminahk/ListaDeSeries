import { Box } from '@mui/material'
import React from 'react'
import { Connect } from '../components/Connect'

export const Home = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '98vh',
            // overflow: "hidden",
        }}
    >
        <Connect />
    </Box>
)
