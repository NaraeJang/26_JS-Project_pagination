import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const init = async () => {
  const follwers = await fetchFollowers();
  console.log(follwers);
};

window.addEventListener("load", init);
