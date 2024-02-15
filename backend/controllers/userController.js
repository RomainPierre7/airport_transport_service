const asyncHandler = require("express-async-handler");

exports.users_list = asyncHandler(async (req, res, next) => {
    const usersWithBusNumbers = [
        { name: "Romain", bus_number: "A123", date: "2021-01-01", time: "08:00" },
        { name: "Enid", bus_number: "B456", date: "2021-03-01", time: "11:00" },
        { name: "Lisa", bus_number: "C789", date: "2021-05-01", time: "14:00" },
        { name: "Florian", bus_number: "D101", date: "2021-07-01", time: "17:00" },
        { name: "Marco", bus_number: "E112", date: "2021-09-01", time: "20:00" },
    ];
    res.json({ users: usersWithBusNumbers });
});