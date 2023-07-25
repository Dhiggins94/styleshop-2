
import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
// above is the strapi products filtering method used from the documentation(everything up till the {catId}). since we cant send an array directyly using strapi(strapi would have you send each item one by one using their filtering method) we will use the map function to create a new filter for each item(the subcat mapping will look for an item and then each item gets its own filtered subcategories). next will be the filtering of price using the lowest price(lowest price we took from the documentation) and the maxprice(our max price we setted). since the application could get bigger and slower depending on how many products to filter, it may be worth to implement button inputs for price filtering to refetch data.  next we're gonna use the documentations sort query for sorting prices and it can be set in asecding or descending order(with the help of our sort prop). strapi also uses its sort functioinality using the qs library which helps for cleaner and more complex queries which doesnt need to be in a string like this and uses objects