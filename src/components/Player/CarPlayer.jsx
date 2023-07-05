
import { useEffect } from 'react';
// import "./CarPlayer.css";
function CarPlayer() {
  useEffect(() => {
    async function init() {
      const player = await window.threekitPlayer({
        assetId: 'c3d30f69-df44-42c1-8c88-14d856a458d7',
        authToken: '9104bd78-c62d-444c-938c-0f6f0edc8021',
        el: document.getElementById('player'),
        showLoadingThumbnail: true,
        showConfigurator: true,
        showAR: true,
      });
      window.player = player;
      window.configurator = await player.getConfigurator();
      window.player.camera.orbit(90, 90);
      window.player.camera.pan(25, 25);
      // window.player.camera.zoom(20);
      // window.player.camera.setPosition(new Vector3(0, 0, 10));
      // window.player.on('preloaded', () => {
      //     console.log('preloaded');
      //   })
      // console.log(window.configurator.getDisplayAttributes());
    }

    init();
  }, []);

  return <div id="player"></div>;
}

export default CarPlayer;