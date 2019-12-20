import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from "ng2-charts";

@Component({
  selector: "app-skills-analysis",
  templateUrl: "./skills-analysis.component.html",
  styleUrls: ["./skills-analysis.component.css"]
})
export class SkillsAnalysisComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [
    "Programming Languages",
    "Software Technologies",
    "UX Practices",
    "Miscellaneous Technical Skills"
  ];
  public pieChartData: SingleDataSet = [6, 8, 6, 10];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#9b5a5a"]
    }
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {}
}
