


const routify = (app) => {
    require('./login')(app);
    require('./signup')(app)
}

module.exports = routify;