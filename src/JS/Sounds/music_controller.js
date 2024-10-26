
let menuMusic = new Audio('../../../assets/Sound/Pixelated Dreams.mp3');
let mapMusic = new Audio('../../../assets/Sound/Pixelated Adventures.mp3')
let battleMusic = new Audio('../../../assets/Sound/Pixel Dawn.mp3');
let selectedMkSound = new Audio('../../../assets/Sound/Digital Echoes.mp3');
let attkSound = new Audio('../../../assets/Sound/Digital Echoes (1).mp3');

function setMusicMMenu(){

    setTimeout(()=>{
        menuMusic.pause();
    },
    
    menuMusic.duration  
    )

}