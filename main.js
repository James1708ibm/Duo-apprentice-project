const Mute_Button = document.querySelector('.Mute_Button');
Mute_Button.addEventListener('click', Sound_Control);
function Sound_Control(){
    let Toggle_Mute = document.querySelector('.Sound_Control');
    Toggle_Mute.muted = !Toggle_Mute.muted;
}
//if mute is false display Music_Note else display Music_Note_Muted
/*if (toggleMute != toggle.muted) {
    Mute_Button = Music_Note.jpg;
}
else {
    Mute_Button = Music_Note_
}*/
// when the mute button is clicked the source image is changed to Music note muted and reverted if clicked again
Mute_Button.addEventListener('click', Mute_Button_Transition);
function Mute_Button_Transition(){
   /* if (Toggle_Image = 1){
        Mute_Button.src="Music_Note_Muted.jpg"; 
        Toggle_Image = 2;
    }
    else{
        Mute_Button.src="Music_Note.jpg";
        Toggle_Image = 1;
    }*/
   /* if (Mute_Button.src="Music_Note.jpg"){
        Mute_Button.src="Music_Note_Muted.jpg"; 
    }
    if (Mute_Button.src="Music_Note_Muted.jpg"){
     Mute_Button.src="Music_Note.jpg";
    }*/
}