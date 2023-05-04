basic.showIcon(IconNames.Happy)
basic.pause(500)
let ok = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        basic.pause(500)
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # # # . .
                # . . # .
                # # # . .
                # . . # .
                # # # . .
                `)
            if (input.buttonIsPressed(Button.A)) {
                ok = 1
            }
        }
    }
    if (ok == 1) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("E C D F E G E D ", 400)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
})
