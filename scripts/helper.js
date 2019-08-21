class Helper {
	playPauseAndUpdate (song) {
		player.playPause(song);
		 }

}

setInterval( () => {
		if (player.playState !== 'playing') { return; }  
		const currentVolume = player.setVolume();
		const duration = player.getDuration();
		const percent = (currentVolume / duration) * 100;
		$('#volume-control .current-volume').text( currentVolume );
		$('#volume-control input').val(percent);
	}, 1000);