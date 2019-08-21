class Helper {
	playPauseAndUpdate (song) {
		player.playPause(song);
		const duration = player.currentlyPlaying.getDuration();
		 }

}

setInterval( () => {
		if (player.playState !== 'playing') { return; }  
		const currentVolume = player.setVolume();
		
		const percent = (currentVolume / duration) * 100;
		$('#volume-control .current-volume').text( currentVolume );
		$('#volume-control input').val(percent);
	}, 1000);