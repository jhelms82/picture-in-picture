const videoElement = document.getElementById('video');
const button = document.getElementById('button');


//Prompt to select media strea, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaSteam;
        videoElement.onloadeddata = () => {
            videoElement.onplay();
        }

        } catch (error) {
            console.log("error here: ", error);
        }
}


button.addEventListener('click', async ()=> {
    //Disable button
    button.display = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.display = false;
});

//On load
selectMediaStream()