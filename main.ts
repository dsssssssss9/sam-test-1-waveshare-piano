basic.showIcon(IconNames.Yes)
billy.say("I AM SAM")
basic.forever(function () {
    if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
        billy.voicePreset(VoicePreset.SAM)
        billy.say("Hello There Frank")
    } else if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
        billy.voicePreset(VoicePreset.LITTLE_OLD_LADY)
        billy.say("This demo is using a WaveShare Piano for BBC MicroBit")
    } else if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
        billy.voicePreset(VoicePreset.STUFFY_GUY)
        billy.say("Space , The Fi nal Frontier!")
    } else if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
    	
    } else {
    	
    }
})
