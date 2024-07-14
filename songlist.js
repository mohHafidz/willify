document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('tbody');

    // Lakukan iterasi melalui setiap entri dalam dataset
    musicDataset.forEach((song, index) => {
        const row = document.createElement('tr');

        // Buat kolom-kolom untuk setiap entri
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div class="lagu">
                    <img src="${song.image}" alt="">
                    <div class="nama-lagu">
                        <span>${song.title}</span>
                        <span>${song.artist}</span>
                    </div>
                </div>
            </td>
            <td class="album">${song.album}</td>
            <td>${song.duration}</td>
        `;

        // Tambahkan baris ke dalam tabel
        tbody.appendChild(row);

        // Tambahkan atribut data-song-id ke baris untuk referensi
        row.setAttribute('data-song-id', song.id);
    });

    // Tambahkan event listener untuk setiap baris agar dapat menavigasi ke halaman detail lagu
    const rows = document.querySelectorAll('tr[data-song-id]');
    rows.forEach(row => {
        row.addEventListener('click', function() {
            const songId = this.getAttribute('data-song-id');
            window.location.href = `songdetail.html?songId=${songId}`;
        });
    });
});

const numberOfSongs = musicDataset.length;

document.getElementById('count').innerText = `${numberOfSongs} Songs`;

document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});