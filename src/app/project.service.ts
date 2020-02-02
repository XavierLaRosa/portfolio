import { Project } from "./project.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService {
  //make a variable that holds an array of Recipes (the model we made)
  private projects: Project[] = [
    new Project(
      "active",
      "Project-GG",
      ["ReactJS", "Adobe XD", "Kanban"],
      "Working with a team of three to develop a social media website that is aimed towards gamers.",
      "./assets/gg.gif",
      "First slide",
      "https://github.com/sangmattxavier/Project-GG"
    ),
    new Project(
      "",
      "Nardwuar",
      ["Swift", "Xcode", "Postman"],
      "Worked alongside a backend developer to create a mobile application.",
      "./assets/nardwuar.gif",
      "Second slide",
      "https://github.com/RU-Nardwuar/iOS_Nardwuar"
    ),
    new Project(
      "",
      "BetterWeather",
      ["Swift", "Xcode", "Postman", "DarkSky API"],
      "Created a mobile application that returns current weather data and data for seven days forward.",
      "./assets/betterweather.gif",
      "Third slide",
      "https://github.com/XavierLaRosa/weatherApp"
    ),
    new Project(
      "",
      "Song Library",
      ["JavaFX", "Scene Builder", "Data Strucutres"],
      "Worked in a team of two to create a desktop application via JavaFX to display a song list with Add, Edit, and Delete functions.",
      "./assets/SongLibrary.gif",
      "Fourth slide",
      "https://github.com/sangmattxavier/SongLib"
    ),
    new Project(
      "",
      "Roll a Ball With a Twist",
      ["JavaFX", "Scene Builder", "Data Strucutres"],
      "Created a two player unity application where players collect gems and try to beat the clock.",
      "./assets/ball.gif",
      "Fifth slide",
      "https://github.com/XavierLaRosa/Roll-a-Ball-With-a-Twist"
    )
  ];

  getProjects() {
    return this.projects.slice();
  }
}
