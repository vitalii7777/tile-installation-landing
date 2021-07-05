import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


export const ContactUsInfo = () => {

    return (
        <div className="ContactUsInfo">
        <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center">
                        Our Contacts
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        Fill up the form and our team will get back to you within 24 hours.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </div>
    );
};

