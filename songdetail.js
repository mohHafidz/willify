const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('songId');

const audioPlayer = document.getElementById('audioPlayer');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const songImage = document.getElementById('songImage');
const songTitle = document.getElementById('songTitle');
const playPauseBtn = document.getElementById('playPauseBtn');
const loopBtn = document.getElementById('loopBtn');
const lyricsContainer = document.getElementById('lyricsContainer');

const song = musicDataset.find(s => s.id === songId);

if (song) {
    songImage.src = song.image;
    songTitle.textContent = song.title;
    audioPlayer.src = song.filename;
    lyricsContainer.innerHTML = song.lyrics; // Memasukkan lirik ke dalam container
    audioPlayer.play();
} else {
    alert('Song not found.');
}

window.addEventListener('load', function() {
    audioPlayer.play();
});

audioPlayer.ontimeupdate = function() {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progressPercent + '%';
};

progressContainer.addEventListener('click', function(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
});

loopBtn.addEventListener('click', () => {
    audioPlayer.loop = !audioPlayer.loop; // Toggle loop property
    loopBtn.classList.toggle('active', audioPlayer.loop); // Toggle active class
    const loopImg = loopBtn.querySelector('img');
    loopImg.src = audioPlayer.loop ? 'assets/loop.png' : 'assets/Vector.png'; // Change icon if needed
});

function togglePlayPause() {
    const playPauseImg = playPauseBtn.querySelector('img');
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
        playPauseImg.src = 'assets/pause.png';  // Change to stop icon
    } else {
        audioPlayer.pause();
        playPauseImg.src = 'assets/play button.png';  // Change to play icon
    }
}

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPrevSong);

let currentSongIndex = musicDataset.findIndex(s => s.id === songId);

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % musicDataset.length; // Menghitung indeks lagu berikutnya
    loadSong(currentSongIndex);
}

function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + musicDataset.length) % musicDataset.length; // Menghitung indeks lagu sebelumnya
    loadSong(currentSongIndex);
}

function loadSong(index) {
    const nextSong = musicDataset[index];
    if (nextSong) {
        songImage.src = nextSong.image;
        songTitle.textContent = nextSong.title;
        audioPlayer.src = nextSong.filename;
        lyricsContainer.innerHTML = nextSong.lyrics; // Memasukkan lirik ke dalam container
        audioPlayer.play(); // Memulai pemutaran lagu secara otomatis
    } else {
        alert('Song not found.');
    }
}

audioPlayer.addEventListener('ended', playNextSong);

const exitButton = document.querySelector('.exit');

exitButton.addEventListener('click', function() {
    window.location.href = 'songlist.html'; // Ganti 'nama_halaman_daftar_lagu.html' dengan URL sebenarnya
});
