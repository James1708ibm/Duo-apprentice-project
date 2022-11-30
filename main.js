const Mute_Button = document.querySelector('.Mute_Button');
Mute_Button.addEventListener('click', Sound_Control);
function Sound_Control() {
    let Toggle_Mute = document.querySelector('.Sound_Control');
    Toggle_Mute.muted = !Toggle_Mute.muted;

    //console.log(Mute_Button.src);

    // if (Mute_Button.src.indexOf("Music_Note.jpg") >= 0) 
    // {
    //     Mute_Button.src = "Music_Note_Muted.jpg";
    // }
    // else {
    //     Mute_Button.src = "Music_Note.jpg"
    // }

}

// when the mute button is clicked the source image is changed to Music note muted and reverted if clicked again
Mute_Button.addEventListener('click', Mute_Button_Transition);
function Mute_Button_Transition() {
    if (Mute_Button.src.indexOf("Music_Note.jpg") >= 0) 
    {
        Mute_Button.src = "Music_Note_Muted.jpg";
    }
    else {
        Mute_Button.src = "Music_Note.jpg"
    }
}