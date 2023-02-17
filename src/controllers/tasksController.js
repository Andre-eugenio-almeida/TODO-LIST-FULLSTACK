
const getAll = (request, response) => {
    return response.status(200).json({message: 'controller está tudo ok!'});
};

module.exports = {
    getAll
}