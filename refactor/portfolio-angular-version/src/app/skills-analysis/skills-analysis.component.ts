import { Component, OnInit } from "@angular/core";
import * as Chart from "chart.js";

@Component({
  selector: "app-skills-analysis",
  templateUrl: "./skills-analysis.component.html",
  styleUrls: ["./skills-analysis.component.css"]
})
export class SkillsAnalysisComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    new Chart(document.getElementById("myChart"), {
      type: "pie",
      data: {
        labels: [
          "Programming Languages",
          "Software Technologies",
          "UX Practices",
          "Miscellaneous Technical Skills"
        ],
        datasets: [
          {
            label: "Skills",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#9b5a5a"],
            data: [6, 8, 6, 10]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: "Overview of Technical Skills"
        },
        legend: {
          position: "left"
        }
      }
    });
  }
}
