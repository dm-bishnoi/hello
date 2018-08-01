import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';
  date = new Date();
  today: number = Date.now();
  birthday = new Date(1988, 3, 15);

  cur = 42343.877889;
  cur1 = 22881.773784;
  cur2 = 12521.232523;
  cur3 = 52423.324514;

}
