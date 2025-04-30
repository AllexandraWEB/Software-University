// It makes a full rotation every 2.5 sec

// The song duration in seconds is calculate by the given formula:

//(albumName.length * bandName.length) * song-name.length / 2

function gramophone(bandName, albumName, songName) {
    let songDuragion = (albumName.length * bandName.length) * songName.length / 2; // Creating variable based on the given formula

    let rotation = Math.ceil(songDuragion / 2.5); // It needs to be rounded up

    console.log(`The plate was rotated ${rotation} times.`);
}

gramophone('Rammstein', 'Sehnsucht','Engel');