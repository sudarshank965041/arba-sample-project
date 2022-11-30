export default async function getProducts() {
  return await fetch("https://fakestoreapi.com/products").then((resp: any) => resp.json());
}
