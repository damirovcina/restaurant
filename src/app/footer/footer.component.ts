import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear: number;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const date = new Date().getFullYear();
    this.currentYear = date;
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpTo(value);
    });
  }

  jumpTo(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  }
}
