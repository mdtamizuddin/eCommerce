import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-72'>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress style={{ width: '50px', height: '50px' }} />
            </Box>
        </div>
    )
}

export default Loading