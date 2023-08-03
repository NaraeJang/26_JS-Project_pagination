import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");

const init = async () => {
  const follwers = await fetchFollowers();

  title.textContent = `pagination`;

  displayFollowers(follwers);
};

window.addEventListener("load", init);
