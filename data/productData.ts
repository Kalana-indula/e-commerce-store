interface ProductDetails{
    productId:string;
    productName:string;
    productPrice:number;
    productDetails:string;
    variants:string;
}

const BestSellingProducts:ProductDetails[] = [
    {
        productId:"PRD1",
        productName:"Nike Air Force 1 Mid '07",
        productPrice:98.40,
        productDetails:"Men's Shoes",
        variants:"6 Colour",
    },
    {
        productId:"PRD2",
        productName:"Nike Air Force 1 Mid '07",
        productPrice:98.40,
        productDetails:"Men's Shoes",
        variants:"4 Colour",
    },
    {
        productId:"PRD3",
        productName:"Nike Air Force 1 Mid '07",
        productPrice:98.40,
        productDetails:"Men's Shoes",
        variants:"4 Colour",
    }
];

export default BestSellingProducts;