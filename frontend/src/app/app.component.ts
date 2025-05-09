import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  audio = new Audio();
  isMuted = false;
  volume = 0.125;

  ngOnInit() {
    this.audio.src = 'assets/sottofondo.mp3';
    this.audio.loop = true;
    this.audio.volume = this.volume;

    // Aspetta il primo click dell’utente per far partire l’audio
    const startAudio = () => {
      this.audio.play().catch(e => console.error('Audio autoplay bloccato:', e));
      document.removeEventListener('click', startAudio); // rimuove listener dopo il primo click
    };

    document.addEventListener('click', startAudio);
  }


  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
  }

  changeVolume(event: any) {
    this.volume = event.target.value;
    this.audio.volume = this.volume;
    if (this.isMuted) {
      this.audio.muted = false;
      this.isMuted = false;
    }
  }

  getSliderBackground(value: number): string {
    const percentage = value * 100;
    return `linear-gradient(to right, #28a745 0%, #28a745 ${0}%, #6f42c1 ${100}%, #6f42c1 100%)`;
  }

}
