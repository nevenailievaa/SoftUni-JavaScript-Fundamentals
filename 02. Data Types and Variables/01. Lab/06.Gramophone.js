function gramophone(bandName, albumName, songName) {
    const songDurationInSeconds = (albumName.length * bandName.length) * songName.length / 2;
    const rotationsCount = Math.ceil(songDurationInSeconds / 2.5);
    
    console.log(`The plate was rotated ${rotationsCount} times.`);
}