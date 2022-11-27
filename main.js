const Mute_Button = document.querySelector('#Mute_Button');
Mute_Button.addEventListener('click', Sound_Control);
function Sound_Control(){
    let toggleMute = document.querySelector('.Sound_Control');
    toggleMute.muted = !toggleMute.muted;
}


