import axios from 'axios';

async function getBlogByPage(page, pageSize) {
    return await axios.get('/getBlogsByPage?page=' + page + '&pageSize=' + pageSize).then(res => res.data);
}

async function queryBlogsByPageByTag(page, pageSize, tagName) {
    return await axios.get('/queryBlogsByPageByTag?page=' + page + '&pageSize=' + pageSize + '&tagName=' + tagName).then(res => res.data);
    ;
}

async function getSingleBlog(id) {
    return await axios.get('/getSingleBlog/' + id).then(res => res.data);
}

async function queryBlogBySearch(page, pageSize, search) {
    return await axios.get('/queryBlogBySearch?page=' + page + '&pageSize=' + pageSize + '&search=' + search).then(res => res.data);
}



export default {
    getBlogByPage,
    queryBlogsByPageByTag,
    getSingleBlog,
    queryBlogBySearch
}