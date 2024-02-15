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
            productList.innerHTML += `
                <tr>
                    <th>${product.productId}</th>
                    <th>${product.productName}</th>
                    <th>${product.productPrice}원</th>
                    <th>${product.productSize}</th>
                </tr>
            `;
        }
    } catch (error) {
        console.log(error);
    }
}
