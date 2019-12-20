import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-carousel-control",
  templateUrl: "./project-carousel-control.component.html",
  styleUrls: ["./project-carousel-control.component.css"]
})
export class ProjectCarouselControlComponent implements OnInit {
  @Input() isPrev: Boolean;
  direction: string;
  constructor() {}

  ngOnInit() {
    if (this.isPrev) {
      this.direction = "prev";
      console.log(this.direction);
    } else {
      this.direction = "next";
      console.log(this.direction);
    }
  }
}
