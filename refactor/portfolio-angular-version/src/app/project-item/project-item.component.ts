import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-item",
  templateUrl: "./project-item.component.html",
  styleUrls: ["./project-item.component.css"]
})
export class ProjectItemComponent implements OnInit {
  @Input() title: string;
  @Input() skills: string[];
  //add a skill object with label and color property
  @Input() description: string;
  @Input() path: string;
  @Input() slide: string;
  @Input() link: string;
  @Input() type: boolean;
  state: String;

  constructor() {}

  ngOnInit() {}
}
