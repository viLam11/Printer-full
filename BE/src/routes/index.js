const authRouter = require('./auth.route');
// const customerRouter = require('./customer.route.js');
// const adminRouter = require('./admin.route.js');
// const sellerRouter = require('./seller.route.js');
// const productRouter = require('./customer.route.js');

function route(app) {
    // app.use('/product', productRouter);
    // app.use('/admin', adminRouter);
    // app.use('/customer', customerRouter);
    // app.use('/seller', sellerRouter);
    
    app.use('/', authRouter)
}

module.exports = route;
