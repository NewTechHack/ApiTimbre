/**
 * Here are registered the API versions
 */
var routerRequireV1 =  require('./v1/router');

module.exports = {
    '/v1' : routerRequireV1,
    '' : routerRequireV1
    //'v2' : routerRequireV2,
}
