export default function getImages() {
  const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  const imgPizzas = require.context("/public/images/pizzas", false);
  const pizzaList = imgPizzas.keys().map((image) => imgPizzas(image));
  const randomPizzaList = ([...arr], n) => shuffle(arr).slice(0, n);
  const result = randomPizzaList(pizzaList, 4);

  return result;
}
