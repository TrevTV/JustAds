videojs.hook("setup", function (player) {
  setup(player);
});

function setup(player) {
    player.on("ended", function () {
        console.log("ended");
    });
}
