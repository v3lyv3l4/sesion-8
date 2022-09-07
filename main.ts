input.onButtonPressed(Button.A, function () {
    N += 1
    basic.showNumber(N)
})
input.onButtonPressed(Button.AB, function () {
    P1 = "AU REVOIR"
})
input.onButtonPressed(Button.B, function () {
    N += -1
    basic.showNumber(N)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString(P1)
})
let N = 0
let P1 = ""
P1 = "BONJOUR"
N = randint(0, 100)
