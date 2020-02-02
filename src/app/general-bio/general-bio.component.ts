import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-general-bio",
  templateUrl: "./general-bio.component.html",
  styleUrls: ["./general-bio.component.css"]
})
export class GeneralBioComponent implements OnInit {
  @Input() image: String;

  constructor() {}

  ngOnInit() {}
}
