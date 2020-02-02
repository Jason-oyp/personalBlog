import axios from 'axios'

export async function editComment(blog_id, user_name, email, comments, parent, ctime, utime) {
    return await axios.post('/editComment', {
        blog_id,
        user_name,
        email,
        comments,
        parent,
        ctime,
        utime
    });
}

export async function getCaptcha() {
    return await axios.get('/getCaptcha');
}

export async function queryComments(blog_id) {
    return await axios.get('/queryComments?blog_id=' + blog_id).then(res => res.data);
}

export async function queryHotComments() {
    return await axios.get('/queryHotComments').then(res => res.data);
}