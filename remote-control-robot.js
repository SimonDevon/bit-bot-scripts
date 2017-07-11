let NeoPixels: neopixel.Strip = null
let received = 0
basic.forever(() => {
    if (received == 2) {
        pins.analogWritePin(AnalogPin.P0, 192)
        pins.analogWritePin(AnalogPin.P1, 511)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        NeoPixels = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB_RGB)
        NeoPixels.showColor(neopixel.colors(NeoPixelColors.Green))
        NeoPixels.setBrigthness(255)
        NeoPixels.show()
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    } else if (received == 3) {
        pins.analogWritePin(AnalogPin.P0, 511)
        pins.analogWritePin(AnalogPin.P1, 511)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        NeoPixels = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB_RGB)
        NeoPixels.showColor(neopixel.colors(NeoPixelColors.Blue))
        NeoPixels.setBrigthness(255)
        NeoPixels.show()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (received == 4) {
        pins.analogWritePin(AnalogPin.P0, 511)
        pins.analogWritePin(AnalogPin.P1, 192)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        NeoPixels = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB_RGB)
        NeoPixels.showColor(neopixel.colors(NeoPixelColors.Orange))
        NeoPixels.setBrigthness(255)
        NeoPixels.show()
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    }
})
radio.onDataPacketReceived(({ receivedNumber: receivednumber }) => {
    received = receivednumber
})
radio.setGroup(1)
received = 0
