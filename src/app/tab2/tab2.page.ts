import { Component, Input } from '@angular/core';
import AudioManagement from '@ionic-native/audio-management/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Input()
  audiomode1 = 'test';

  @Input()
  audiomode2: AudioManagement.AudioModeReturn;

  @Input()
  voltype1 = 'test';

  @Input()
  voltype2: string | number = 'test';

  @Input()
  voltype3: string | number = 'test';

  constructor(public audioman: AudioManagement) {

  }

  setAudioMode() {
    this.audioman.setAudioMode(AudioManagement.AudioMode.NORMAL)
      .then(() => {
        this.audiomode1 = 'Device audio mode is now NORMAL';
      })
      .catch((reason) => {
        this.audiomode1 = reason;
      });
  }

  getAudioMode() {
    this.audioman.getAudioMode()
      .then((value: AudioManagement.AudioModeReturn) => {
        this.audiomode2 = value;
      });
  }

  setVolume() {
    this.audioman.setVolume(AudioManagement.VolumeType.MUSIC, 5)
      .then(() => {
        this.voltype1 = 'Device volume for MUSIC is now 5';
      })
      .catch((reason) => {
        this.voltype1 = reason;
      });
  }

  getVolume() {
    this.audioman.getVolume(AudioManagement.VolumeType.MUSIC)
      .then((value) => {
        this.voltype2 = value.volume;
      });
  }

  getMaxVolume() {
    this.audioman.getMaxVolume(AudioManagement.VolumeType.MUSIC)
      .then((value) => {
        this.voltype3 = value.maxVolume;
      });
  }
}
