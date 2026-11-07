import type { song } from "../types/song";

export const playlist : song[] = [
    {
        id: 1,
        title: 'The Rainbows',
        artist: 'Radiohead',
        coverAlbum: '/covers/rainbows.webp',
        coverSong: '/roundedcovers/rainbows-circle.webp',
        songName: ['Weird Fish', 'All I Need', 'Nude'],
        audio: ['songs/radiohead/weird-fish.mp3','songs/radiohead/nude.mp3','songs/radiohead/all-i-need.mp3']
    },
    {
        id: 2,
        title: 'Crybaby',
        artist: 'Lil Peep',
        coverAlbum: '/covers/crybaby.webp',
        coverSong: '/roundedcovers/crybaby-circle.webp',
        songName: ['Crybaby', 'Ghost Girl', 'Nineteen'],
        audio: ['songs/lilpeep/crybaby.mp3','songs/lilpeep/ghost-girl.mp3','songs/lilpeep/nineteen.mp3']
    },
    {
        id: 3,
        title: 'Mental Issue',
        artist: 'Mvshreghi',
        coverAlbum: '/covers/mentalissue.webp',
        coverSong: '/roundedcovers/mentalissue-circle.webp',
        songName: ['ADHD', 'Anxiety', 'Paranoid'],
        audio: ['songs/mvshreghi/ADHD.mp3','songs/mvshreghi/anxiety.mp3','songs/mvshreghi/paranoid.mp3']
    }
]