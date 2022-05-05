import { api } from "../api/api";
import { Attraction } from "./AttractionView";
import "./attractions.scss";

export async function Attractions() {
  const section = document.createElement("div");
  section.className = "attractions-section";

  section.innerHTML = `
        <p id="loading">Loading...</p>
    `;
  const attractions = await api.attractions.get();

  const articles = attractions.map(attraction => Attraction(attraction));

  section.querySelector("#loading").remove();
  section.append(...articles);

  return section;
}
