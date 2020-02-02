export class Project {
  public active: String;
  public title: String;
  public skillls: String[];
  public description: String;
  public path: String;
  public slide: String;
  public link: String;

  constructor(
    active: String,
    title: String,
    skills: String[],
    description: String,
    path: String,
    slide: String,
    link: String
  ) {
    this.active = active;
    this.title = title;
    this.skillls = skills;
    this.description = description;
    this.path = path;
    this.slide = slide;
    this.link = link;
  }
}
