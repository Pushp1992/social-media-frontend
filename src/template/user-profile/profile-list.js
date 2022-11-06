import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import fallback_img from '../../images/profile-fallback-img.jpeg';
import ProfileService from '../../utils/profile-service';

const ProfileListPage = () => {
    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        getProfileList();
    }, []);

    const getProfileList = async () => {
        const response = await ProfileService.fetchAllProfile();
        console.log(response.data)
        setProfileList(response.data);
    }

    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', height: '100vh' }}>
                <Grid container direction="row" rowGap={3} justifyContent="space-around" alignItems="center">
                    {
                        profileList.length &&
                        profileList.map((item) =>
                            <Grid item xs md={10} lg={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                {item.name.substr(0, 2).toUpperCase()}
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={`By: ${item.name}`}
                                        subheader={`Created On: ${item.profile_creation_date}`}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={item.image_url || fallback_img}
                                        alt="cover_image"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {/* This is Hard-coded content, please pass it dynamically */}
                                            
                                            Hello there, I am JACK, I love doing comic.
                                            I have been part of various comic film. I also played famous role as MR.Bean
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                    </CardActions>

                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    )
}

export default ProfileListPage;