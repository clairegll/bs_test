class CartManager {
  constructor() {
    this.cart = {};
  }

  // 1. Récupérer le contenu du panier: Elle doit renvoyer le contenu du panier et l'afficher dans la console (objet).

  getCartContent() {
    console.log(this.cart);
  }

  // 2. Mettre à jour une ligne du panier (quantité): Elle prend l'ID d'un produit et une nouvelle quantité, et met à jour cette quantité dans le panier. Les changements doivent être affichés dans la console.
  
  updateCartItemQuantity(productId, newQuantity) {
    if (this.cart[productId] !== undefined) {
      this.cart[productId].quantity = newQuantity;
    }
    console.log(`Updated quantity for product ${productId}: ${newQuantity}`);
    this.getCartContent();
  }

  // 3. Ajouter un produit dans le panier: Elle prend les détails d'un produit et l'ajoute au panier. Le nouveau contenu du panier doit être affiché dans la console.

  addProductToCart(product) {
    if (!this.cart[product.id]) {
      this.cart[product.id] = { ...product, quantity: 1 };
    } else {
      this.cart[product.id].quantity += 1;
    }
    console.log(`Added product to cart:`, product);
    this.getCartContent();
  }
}