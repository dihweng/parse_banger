module.exports = {
    AppName: "WeMunize",
    APP_ID: process.env.APP_ID || 'myAppId',
    MASTER_KEY: process.env.MASTER_KEY || 'myMasterKey',
    SERVER_URL: process.env.SERVER_URL || 'http://'+process.env.IP+':'+process.env.PORT+'/parse',
    DASHBOARD_USER: process.env.DASHBOARD_USER || "retnan",
    DASHBOARD_PASS: process.env.DASHBOARD_PASS || "yahweh",
}