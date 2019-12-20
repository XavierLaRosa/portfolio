import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { GeneralBioComponent } from "./general-bio/general-bio.component";
import { MainSkillsComponent } from "./main-skills/main-skills.component";
import { ProjectCarouselComponent } from "./project-carousel/project-carousel.component";
import { SkillsAnalysisComponent } from "./skills-analysis/skills-analysis.component";
import { ChartsModule } from "ng2-charts";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import {
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faReact,
  faAngular,
  faSwift,
  faJava
} from "@fortawesome/free-brands-svg-icons";
import {
  faNewspaper,
  faPaintBrush,
  faAddressBook,
  faGraduationCap,
  faBriefcase,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectCarouselControlComponent } from './project-carousel-control/project-carousel-control.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GeneralBioComponent,
    MainSkillsComponent,
    ProjectCarouselComponent,
    SkillsAnalysisComponent,
    ProjectItemComponent,
    ProjectCarouselControlComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faLinkedinIn,
      faLinkedin,
      faGithub,
      faGithubAlt,
      faGithubSquare,
      faReact,
      faAngular,
      faSwift,
      faJava,
      faNewspaper,
      faAddressBook,
      faPaintBrush,
      faGraduationCap,
      faBriefcase,
      faUsers
    );
  }
}
