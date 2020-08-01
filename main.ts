input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
    }
})
basic.showIcon(IconNames.Ghost)
