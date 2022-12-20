const MuteButton = document.querySelector('.mute-button');
MuteButton.addEventListener('click', soundControl);
function soundControl() {
    let toggleMute = document.querySelector('.sound-control');
    toggleMute.muted = !toggleMute.muted;
}

// when the mute button is clicked the source image is changed to Music note muted and reverted if clicked again
MuteButton.addEventListener('click', muteButtonTransition);
function muteButtonTransition() {
    if (MuteButton.src.indexOf("Music_Note.jpg") >= 0) 
    {
        MuteButton.src = "Music_Note_Muted.jpg";
    }
    else {
        MuteButton.src = "Music_Note.jpg";
    }
}















// ------------------------------------------
/*let window;

main(passedwindow){
    window = passedwindow;
    document = window.document;

    let muteElement = document.getElementById("Mute_Button");
    muteElement.addEventListener("onclick", toggleMute(muteElement));
Sound_Control = !Muted
 Muted
}*/