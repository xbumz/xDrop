module.exports = {
    ///ตัังค่าmongodb
    dbURL: process.env.DATABASEURL || "mongodb://localhost/dropit",
    ///ตั้งค่าportของweb
    port: process.env.PORT || 3000
}
