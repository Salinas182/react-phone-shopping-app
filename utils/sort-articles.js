export const sortByHighestPrice = (articles) => {
  let sortedArray = [...articles];

  return sortedArray?.sort((article1, article2) => {
    if (+article2.price > +article1.price) {
      return 1;
    }
    if (+article2.price < +article1.price) {
      return -1;
    }
    return 0;
  });
}

export const sortByLowestPrice = (articles) => {
  let sortedArray = [...articles];

  return sortedArray?.sort((article1, article2) => {
    if (+article1.price > +article2.price) {
      return 1;
    }
    if (+article1.price < +article2.price) {
      return -1;
    }
    return 0;
  });
}
