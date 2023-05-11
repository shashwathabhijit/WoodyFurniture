
class FoodDeliveryApp {
    constructor() {
      this.restaurants = [];
      this.cart = [];
      this.user = null;
    }
  
    addRestaurant(restaurant) {
      this.restaurants.push(restaurant);
    }
    removeRestaurant(restaurant) {
      const index = this.restaurants.indexOf(restaurant);
      if (index !== -1) {
        this.restaurants.splice(index, 1);
      }
    }
    addItemToCart(item) {
      this.cart.push(item);
    }
    removeItemFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
    login(user) {
      this.user = user;
    }
    logout() {
      this.user = null;
    }
    checkout() {
    }
  }
  
  class Restaurant {
    constructor(name, menu) {
      this.name = name;
      this.menu = menu;
    }
  }
  
  class MenuItem {
    constructor(name, description, price) {
      this.name = name;
      this.description = description;
      this.price = price;
    }
  }
  
  class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }
  const app = new FoodDeliveryApp();
  const restaurant1 = new Restaurant("Pizza Place", [
    new MenuItem("Margherita", "Tomato sauce, mozzarella, and basil", 10),
    new MenuItem("Pepperoni", "Tomato sauce, mozzarella, and pepperoni", 12),
    new MenuItem("Hawaiian", "Tomato sauce, mozzarella, ham, and pineapple", 14),
  ]);
  app.addRestaurant(restaurant1);
  
  const restaurant2 = new Restaurant("Burger Joint", [
    new MenuItem("Cheeseburger", "Beef patty, cheddar cheese, lettuce, and tomato", 8),
    new MenuItem("Bacon Burger", "Beef patty, bacon, cheddar cheese, lettuce, and tomato", 10),
    new MenuItem("Veggie Burger", "Veggie patty, lettuce, and tomato", 7),
  ]);
  app.addRestaurant(restaurant2);
  const user = new User("John Doe", "johndoe@example.com", "password123");
  app.login(user);
  app.addItemToCart(restaurant1.menu[0]);
  app.addItemToCart(restaurant2.menu[1]);
  app.checkout();
  