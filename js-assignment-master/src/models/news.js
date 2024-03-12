const mysql = require('../lib/mysql');

const createNews = async params => {
    const tourIdValue = params.matchId != null && params.matchId > 0 ? `(SELECT tourId from matches WHERE id=${params.matchId})` : params.tourId;
    const statement = `insert ignore into news (title, description, tourId, matchId) values ('${params.title}', '${params.description}', ${tourIdValue}, ${params.matchId})`;
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getAllNewsByMatchId = async params => {
    const statement = 'select n.title as title, n.description as description from news n where n.matchId = ?';
    const parameters = [params.matchId];
    return await mysql.query(statement, parameters);
}

const getAllNewsByTourId = async params => {
    const statement = 'select n.title as title, n.description as description from news n where n.tourId = ?';
    const parameters = [params.tourId];
    return await mysql.query(statement, parameters);
}

const getAllNewsBySportId = async params => {
    const statement = 'select n.title as title, n.description as description from news n inner join tours t on n.tourId = t.id where t.sportId = ?';
    const parameters = [params.sportId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews: createNews,
    getAllNewsByMatchId: getAllNewsByMatchId,
    getAllNewsByTourId: getAllNewsByTourId,
    getAllNewsBySportId: getAllNewsBySportId
}