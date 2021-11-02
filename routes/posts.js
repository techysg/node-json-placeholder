const express = require('express');
const router = express.Router();
const fetchWrapper = require('../fetchhelper');
const url = 'https://jsonplaceholder.typicode.com/posts';

router.get('/', async function (req, res) {
    const posts = await fetchWrapper.get({ url });
    res.json(posts);
});

router.get('/:id', async function (req, res) {
    const posts = await fetchWrapper.get({ url: `${url}/${req.params.id}` });
    res.json(posts);
});

router.get('/:id/comments', async function (req, res) {
    const posts = await fetchWrapper.get({ url: `${url}/${req.params.id}/comments` });
    res.json(posts);
});




module.exports = router;





