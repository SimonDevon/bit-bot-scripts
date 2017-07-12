let forward = 0
let sideway = 0
let power = false
input.onButtonPressed(Button.A, () => {
    power = true
    radio.setGroup(1)
    radio.setTransmitPower(7)
})
input.onButtonPressed(Button.B, () => {
    power = false
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(() => {
    while (power == true) {
        sideway = input.acceleration(Dimension.X)
        forward = input.acceleration(Dimension.Y)
        if (forward < -20 && sideway < -100) {
            basic.showLeds(`
                # # # . .
                # # . . .
                # . # . .
                . . . # .
                . . . . #
                `)
            radio.sendNumber(2)
        } else if (forward < -20 && sideway > 100) {
            basic.showLeds(`
                . . # # #
                . . . # #
                . . # . #
                . # . . .
                # . . . .
                `)
            radio.sendNumber(4)
        } else if (forward < -20) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            radio.sendNumber(3)
        } else if (forward == 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            radio.sendNumber(3)
        }
    }
})
input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    radio.sendNumber(5)
})
