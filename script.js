fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.json();
    })
    .then((data) => {
        console.log("Products:", data.products);
    })
    .catch((error) => {
        console.error("Error fetching products:", error.message);
    });



async function getProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Products:", data.products);
    } catch (error) {
        console.error("Error fetching products:", error.message);
    }
}

getProducts();