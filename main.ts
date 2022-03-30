let temperaturaKEKW = 0
music.setVolume(255)
basic.forever(function () {
    if (temperaturaKEKW < 30) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    if (temperaturaKEKW < 30) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    temperaturaKEKW = input.temperature()
    basic.showNumber(temperaturaKEKW)
    if (temperaturaKEKW < 30) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (temperaturaKEKW > 30) {
        basic.showIcon(IconNames.Square)
    }
})
