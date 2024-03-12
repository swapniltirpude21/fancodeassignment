const News = require('../models/news');

const createNews = async params => {
    const { matchId, tourId, title, description } = params;
    if (!matchId && !tourId) {
        throw new Error('Either tourId or matchId is required');
    }
    if (!title) {
        throw new Error('Missing required parameter: title');
    }
    if (!description) {
        throw new Error('Missing required parameter: description');
    }

    return await News.createNews(params);
}

const getAllNewsByMatchId = async params => {
    const { matchId } = params;
    if (!matchId) {
        throw new Error('Missing required parameter: matchId');
    }

    return await News.getAllNewsByMatchId(params);
}

const getAllNewsByTourId = async params => {
    const { tourId } = params;
    if (!tourId) {
        throw new Error('Missing required parameter: tourId');
    }
    
    return await News.getAllNewsByTourId(params);
}

const getAllNewsBySportId = async params => {
    const { sportId } = params;
    if (!sportId) {
        throw new Error('Missing required parameter: sportId');
    }
    
    return await News.getAllNewsBySportId(params);
}

module.exports = {
    createNews: createNews,
    getAllNewsByMatchId: getAllNewsByMatchId,
    getAllNewsByTourId: getAllNewsByTourId,
    getAllNewsBySportId: getAllNewsBySportId
}