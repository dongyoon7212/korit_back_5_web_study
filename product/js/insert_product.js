/**
 * servlet 프로젝트명 : product
 * groupId : com.study
 * artifactId : product
 * name: product
 * jdk : 11
 * dependencies
 *      1. lombok
 *      2. jsp
 *      3. gson
 *      4. mysql
 * package
 *      com.study.product
 *      -config     -   DBConfig
 *      -dao        -   ProductDao
 *      -entity     -   Product
 *      -filter     -   CommonFilter
 *      -servlet    -   InsertProductServlet (/product , POST)
 *                  -   SearchProductServlet (/products , GET)
 *
 * DB(db_study)
 * table(product_tb)
 *      -product_id, product_name(unique), product_price, product_size
 *      (SS, S, M, L, XL, XXL)
 */

async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs");

    const product = {
        productName: productInputs[0].value,
        productPrice: productInputs[1].value,
        productSize: productInputs[2].value,
    };

    console.log(product);

    const jsonProductData = JSON.stringify(product); // json형태로 변환

    const option = {
        method: "post",
        Headers: {
            "Content-Type": "application/json",
        },
        body: jsonProductData,
    };

    try {
        const response = await fetch(
            "http://localhost:8080/product/product",
            option
        );

        if (!response.ok) {
            throw await response.json();
        }

        const responseData = await response.json();
        console.log(responseData);

        alert(
            `정상적으로 등록이 ${responseData.successCount}건  완료되었습니다.`
        );
    } catch (error) {
        alert(error?.errorMessage);
    }

    productInputs[0].value = "";
    productInputs[1].value = "";
    productInputs[2].value = "";
}
