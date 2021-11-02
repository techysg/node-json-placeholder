const express = require('express');
const router = express.Router();
const fetchWrapper = require('../fetchhelper');
const url = 'https://jsonplaceholder.typicode.com/users';

router.get('/', async function (req, res) {
    const posts = await fetchWrapper.get({ url });
    res.json(posts);
});


module.exports = router;





