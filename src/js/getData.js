import displayItem from "./appFunctions";

const getData = async () => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/'
    );
    if (!response.ok) {
      throw new Error(`Something Went Wrong status: ${response.status}`);
    }
    const data = await response.json();
    data.result.forEach((score) => {
      displayItem(score);
    });
  };
export default getData;