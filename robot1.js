let slow = 0
let fast = 0
let distance = 0
let item = 0
let leds: neopixel.Strip = null
basic.forever(() => {
    while (true) {
        distance = sonar.ping(
        DigitalPin.P15,
        DigitalPin.P15,
        PingUnit.Centimeters
        )
        basic.showNumber(distance)
        if (pins.digitalReadPin(DigitalPin.P5) == 1) {
            pins.analogWritePin(AnalogPin.P0, fast)
            pins.analogWritePin(AnalogPin.P1, slow)
        } else if (pins.digitalReadPin(DigitalPin.P11) == 1) {
            pins.analogWritePin(AnalogPin.P1, fast)
            pins.analogWritePin(AnalogPin.P0, slow)
        } else if (distance < 2) {
            pins.analogWritePin(AnalogPin.P0, 0)
            pins.analogWritePin(AnalogPin.P1, 0)
            basic.showString("STOP")
            leds.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
            leds.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
            leds.show()
        } else {
            pins.analogWritePin(AnalogPin.P0, fast)
            pins.analogWritePin(AnalogPin.P1, fast)
        }
    }
})
leds = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB_RGB)
leds.setBrigthness(50)
fast = 80
slow = 70
leds.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
leds.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
leds.show()