import "./home.scss";

export async function Home() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Welcome to</h2>
        <p id="intro-header">Our Holiday Resort SPA!</p>
        <p id="intro-header-second">Spend your dream holiday finally!</p>
    `;

  section.className = "intro-section-container";

  const div = document.createElement("div");
  div.className = "image-div-home";

  const image = document.createElement("img");
  div.append(image);

  image.src =
    "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  section.append(div);
  return section;
}
