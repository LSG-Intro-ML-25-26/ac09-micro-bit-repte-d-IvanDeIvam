input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
})
if (input.temperature() > 22) {
    basic.showString("calor")
} else {
    basic.showString("fred")
}
