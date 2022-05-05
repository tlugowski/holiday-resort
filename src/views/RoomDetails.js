import { BackButton } from "../common/BackButton";
import { Rooms } from "./RoomsView";
import "./room.scss";

export function RoomDetails(id) {
  const section = document.createElement("section");

  section.innerHTML = `
        <p id="loading">Loading...</p>
    `;

  fetch(`http://localhost:3000/rooms/${id}`)
    .then(response => response.json())
    .then(room => {
      const { name, beds, guests, price, description, img } = room;

      const article = document.createElement("article");
      const div = document.createElement("div");
      const image = document.createElement("img");
      div.append(image);
      div.classList.add("room-details-container");
      image.classList.add("room-details-img");
      if (img) {
        image.src = img;
      }

      article.innerHTML = `
                <h1>${name}</h1>

                <hr>

                <p>${beds} x 🛏️</p>
                <p>${guests} x 💁</p>

                <p id="article-desc">${description}</p>

                <footer>
                    <strong>${price.toFixed(2)}</strong>
                    ${price < 100 ? "💲✔️" : "💲❌"}
                </footer>
            `;

      article.append(div);

      section.querySelector("#loading").remove();
      section.append(article, BackButton(Rooms));
    });

  return section;
}
