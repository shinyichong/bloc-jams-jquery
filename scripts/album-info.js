 {
    $('#album-title').text(album.title);
    $('img#album-cover-art').attr('src', album.albumArtUrl);
    $('#album-release-info').text(album.releaseInfo);
    $('#album-artist').text(album.artist);
 }
