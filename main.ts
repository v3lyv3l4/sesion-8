input.onButtonPressed(Button.A, function () {
    N = N - 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    N = N + 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(N)
})
let N = 0
let P2 = "-"
let P1 = "-"
N = randint(0, 100)
