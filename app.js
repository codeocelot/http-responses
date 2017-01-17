const app = require('express')();

app.use(
  (req, res, next) => {
    res.set('Access-Control-Allow-Origin','*');
    next();
  }
);

app.get(
  '/:code',
  (req, res, next) => {
    const code = parseInt(req.params.code);
    if(code >= 200){
      return res
        .status(code)
        .json({
          meta: 'OK'
        })
        .end();
    }
    return next();
  }
);

module.exports = app;
