const vistaprincipal = (req, res) => {
    res.render('home')
}

const vistaTablas = (req, res) => {
    res.render('tables')
}

const vistaNotificaciones = (req, res) => {
    res.render('notifications')
}

module.exports = {
    vistaprincipal,
    vistaTablas,
    vistaNotificaciones
}