radio.setGroup(13)
radio.setTransmitPower(0)
basic.forever(function () {
    basic.showString("A")
    radio.sendString("A")
    basic.clearScreen()
    basic.pause(5000)
})
