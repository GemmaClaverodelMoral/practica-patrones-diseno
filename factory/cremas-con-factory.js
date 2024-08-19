// Paso 1: Declarar la clase base del producto
class Cosmetic {
    showDetails() {
      throw new Error('Método no implementado!');
    }
  }
  
  // Paso 2: Implementar productos concretos
  class Crema extends Cosmetic {
    showDetails() {
      console.log('Crema: Hidratante para la piel.');
    }
  }
  
  class Tonico extends Cosmetic {
    showDetails() {
      console.log('Tónico: Limpia y tonifica la piel.');
    }
  }
  
  class Limpiadora extends Cosmetic {
    showDetails() {
      console.log('Limpiadora: Elimina impurezas y maquillaje.');
    }
  }
  
  // Paso 3: Declarar la clase base de la fábrica
  class CosmeticsFactory {
    createProduct() {
      throw new Error('Método no implementado!');
    }
  }
  
  // Paso 4: Implementar fábricas concretas
  class CremaFactory extends CosmeticsFactory {
    createProduct() {
      return new Crema();
    }
  }
  
  class TonicoFactory extends CosmeticsFactory {
    createProduct() {
      return new Tonico();
    }
  }
  
  class LimpiadoraFactory extends CosmeticsFactory {
    createProduct() {
      return new Limpiadora();
    }
  }
  
  // Código cliente
  function appFactory(factory) {
    const product = factory.createProduct();
    product.showDetails();
  }
  
  appFactory(new CremaFactory());       // Output: Crema: Hidratante para la piel.
  appFactory(new TonicoFactory());      // Output: Tónico: Limpia y tonifica la piel.
  appFactory(new LimpiadoraFactory());  // Output: Limpiadora: Elimina impurezas y maquillaje.
  