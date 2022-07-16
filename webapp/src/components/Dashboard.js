import React from 'react';
import { Button, Container, Box } from '@mui/material';

export const Dashboard = () => {

    
    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
                    <Button variant="contained" style={{ align: "center" }}>Add Task</Button>
                </Box>
            </Container>
        </div>
    )
}

export default Dashboard;
