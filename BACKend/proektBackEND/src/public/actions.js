const getPublicHTML = async (req, res, next) =>  {
    res.sendfile('src/public/index.html');
    await next;
};

module.exports = {
    getPublicHTML
};