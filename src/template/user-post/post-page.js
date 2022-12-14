import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CreatePost from './create-post';
// import PostListPage from './post-list';
import userPostService from '../../utils/post-service';

const PostPage = () => {
    const [postCreated, setPostCreated] = useState(false);
    const [postEdited, setPostEdited] = useState(false);

    useEffect(() => {
        // getAllPost();
    });

    const getAllPost = async () => {
        const postlist = await userPostService.getUserPosts();
        console.log('postlist', postlist);
    };

    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', minHeight: '100vh' }}>
                <CreatePost />
                {/* <PostListPage /> */}
            </Box>
        </Container>
    )
}

export default PostPage;
