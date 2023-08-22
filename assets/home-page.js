class Collection {
  constructor(handleJsPath) {
    this.baseUrl = handleJsPath;
  }

  async fetchData() {
    try {
      const response = await fetch(this.baseUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async displayCollectionContents() {
    try {
      const data = await this.fetchData();
      console.log("Collection Contents:", data.products);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async getProduct(productId) {
    const data = await this.fetchData();
    const product = data.products.find(p => p.id === productId);
    if (product) {
      console.log("Product details:", product);
    } else {
      console.log("Product not found");
    }
  }

  async calculateAveragePrice() {
    const data = await this.fetchData();
    const totalPrices = data.products.reduce((sum, product) => sum + product.price, 0);
    const averagePrice = totalPrices / data.products.length;
    console.log("Average price:", averagePrice);
    return averagePrice;
  }

  async getProductsSortedByPrice(order) {
    const data = await this.fetchData();
    const sortedProducts = [...data.products].sort((a, b) => {
      return order === "+" ? a.price - b.price : b.price - a.price;
    });

    console.log(`Most ${order === "+" ? "expensive" : "affordable"} product:`, sortedProducts[0]);
    console.log(`Most ${order === "+" ? "affordable" : "expensive"} product:`, sortedProducts[sortedProducts.length - 1]);
  }
}

// Usage
const collection = new Collection("/assets/home-page.js");
collection.displayCollectionContents();
collection.getProduct("45557285880110");
collection.calculateAveragePrice();
collection.getProductsSortedByPrice("-");
collection.getProductsSortedByPrice("+");


