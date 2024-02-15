async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");

        if (!response.ok) {
            throw await response.json();
        }

        const productDataList = await response.json();

        const productList = document.querySelector(".product-list");

        productList.innerHTML = ``;

        for (let product of productDataList) {
            productList.innerHTML += ProductInfoTr(product);
        }
    } catch (error) {
        console.log(error);
    }
}

function ProductInfoTr({ productId, productName, productPrice, productSize }) {
    return `
        <tr>
            <th>${productId}</th>
            <th>${productName}</th>
            <th>${productPrice}원</th>
            <th>${productSize}</th>
        </tr>
`;
}
