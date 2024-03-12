const News = require('../controllers/news');
const express = require('express');

module.exports = function(app) {
    app.use(express.json());
    app.route('/news').post(async (req, res, next) => {
        try {
            let params = req.body;
            return res.json(await News.createNews(params));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match').get(async (req, res, next) => {
        try {
            let params = req.query;
            return res.json(await News.getAllNewsByMatchId(params));
        } catch (err) {
            return next(err);
        }
    });
    
    app.route('/news/tour').get(async (req, res, next) => {
        try {
            let params = req.query;
            return res.json(await News.getAllNewsByTourId(params));
        } catch (err) {
            return next(err);
        }
    });
    
    app.route('/news/sport').get(async (req, res, next) => {
        try {
            let params = req.query;
            return res.json(await News.getAllNewsBySportId(params));
        } catch (err) {
            return next(err);
        }
    });
}