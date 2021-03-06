export function BackButton(Component) {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-info");
  button.setAttribute("type", "button");
  button.innerText = "Back";

  const navigateEvent = new CustomEvent("navigate", {
    detail: Component,
  });

  button.addEventListener("click", () => {
    document.body.dispatchEvent(navigateEvent);
  });

  return button;
}
