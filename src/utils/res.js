    /**
     * @param  {number} status - code
     * @param  {res} data - data object, can be null as well
     * @param  {error} err - error stack handled by middleware
     */module.exports = {
    _return: (status, data, err) => {
        if (err) { return next(err); }
        console.log(data);
        res.status(status).send(data);
    }
}