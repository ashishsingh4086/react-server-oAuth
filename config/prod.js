module.exports={
    // googleClientID:'371881862536-0dl5ckkhja9hdq51daeliir0i6velpij.apps.googleusercontent.com',
    // googleClientSecret: 'PSyZg0J6r07tkpKKFMdFnM4s',
    // mongoURI: 'mongodb://singha4086:Lastride1@ds149353.mlab.com:49353/emaily-prod',
    // cookieKey:'alsdkfjaertoeodfbcxnssdfksjdfdkfdjfdweotrof'

    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY

};