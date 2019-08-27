class Helper {
	playPauseAndUpdate (song) {
		player.playPause(song);
		const duration = player.currentlyPlaying.getDuration();
		$('#time-control .total-time').text(player.myTime( song.duration ));
		 }

}
