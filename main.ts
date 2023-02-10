let jarak = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Pinkish)
    jarak = Tinybit.Ultrasonic_Car()
    if (jarak < 50) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 255)
        basic.pause(500)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 255)
        basic.pause(500)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
basic.forever(function () {
    basic.showString("Love-Bot")
})
