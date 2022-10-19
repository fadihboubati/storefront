import React from 'react'
import { Grid, Container, Box, Link } from '@mui/material';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">


            <Box

                // bgcolor="GrayText"
                bgcolor="#1976D2"
                color="white"
                px={{ xs: 3, xm: 10 }}
                py={{ xs: 5, xm: 10 }}
            >


                <Container maxWidth="lg" >
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box borderBottom={1} >Help</Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >Contact</Link>
                            </Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >Privacy Policy</Link>
                            </Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >Support</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box borderBottom={1} >Account</Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >Login</Link>
                            </Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >Register</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box borderBottom={1} >Messges</Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >Backup</Link>
                            </Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >History</Link>
                            </Box>
                            <Box>
                                <Link underline="none" href='/' color='inherit' >Role</Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box
                        textAlign="center"
                        px={{ xs: 5, sm: 10 }}
                        py={{ xs: 5, sm: 0 }}
                    >
                        Author: Fadi Hboubati &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footer
