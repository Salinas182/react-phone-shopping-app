import { Button } from "@mui/material";
import { sortByHighestPrice, sortByLowestPrice } from '../utils/sort-articles';

export default function SortButtons({ articles, setArticles }) {
  const buttonsStyle = { margin: '3px' };
  return (
    <>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setArticles(sortByLowestPrice(articles))}
      >
        Precio más bajo primero
      </Button>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setArticles(sortByHighestPrice(articles))}
      >
        Precio más alto primero
      </Button>
    </>
  )
}
