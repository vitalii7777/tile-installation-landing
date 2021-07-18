import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

export const ContactUsInfo = () => {

    return (
        <div className="ContactUsInfo">
        <Grid>
            <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center">
                       Advanced Tile Installation
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                        <Typography variant="body1" gutterBottom>
                            <strong>Address:</strong> 8 Bradwick, Dr Vaughan, ON L4K 2T3
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong> Phone:</strong>  905-761-5585
                        </Typography>
                        <Typography variant="body1" gutterBottom >
                            <strong>Viber:</strong> 905-761-5595
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong> Email: </strong>
                            <a href = "mailto: ati@gmail.com">ati@gmail.com</a>
                        </Typography>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </div>
    );
};
