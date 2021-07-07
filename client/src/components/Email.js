import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { emailSend } from '../request/SendEmailReq'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


export const Email = () => {

    const history = useHistory();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const changeHandler = event => {
        event.preventDefault();
        setForm ({...form, [event.target.name]: event.target.value});

    };

    const clickHandler = async () => {
        await emailSend(form)
    };

    return (
        <div className="EmailForm">
            <Grid>
                <Card style={{ maxWidth: 700, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" align="center">
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name" label="First Name" name="firstName" variant="outlined" fullWidth required
                                               value={form.firstName}
                                               onChange={changeHandler}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter last name" label="Last Name" name="lastName" variant="outlined" fullWidth required
                                               value={form.lastName}
                                               onChange={changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email" label="Email" name="email" variant="outlined" fullWidth required
                                               value={form.email}
                                               onChange={changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" name="phone" variant="outlined" fullWidth required
                                               value={form.phone}
                                               onChange={changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" name="message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required
                                               value={form.message}
                                               onChange={changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={clickHandler}>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};
