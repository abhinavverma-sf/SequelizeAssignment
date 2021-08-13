import { Component } from "@angular/core";
import { FormatDate } from "./datetime.decorator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "assignment10";
  displaytable: boolean = false;
  
// @FormatDate()

  loadData(element: HTMLElement) {
    this.displaytable = true;

    this.change(element);
  }
  // learned from stackoverflow
  change(element: HTMLElement) {
    element.textContent = "Refresh Data";
    element.style.display='none';
  }

  
}
