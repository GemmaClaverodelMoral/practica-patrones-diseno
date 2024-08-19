// Producto base
class Cosmetic {
    showDetails() {
      throw new Error('Método no implementado!');
    }
  }
  
  // Productos concretos
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
  
  // Código cliente
  function createCosmetic(productType) {
    switch (productType) {
      case 'crema':
        return new Crema();
      case 'tonico':
        return new Tonico();
      case 'limpiadora':
        return new Limpiadora();
      default:
        throw new Error('Tipo de producto no válido.');
    }
  }
  
  const crema = createCosmetic('crema');
  const tonico = createCosmetic('tonico');
  const limpiadora = createCosmetic('limpiadora');
  
  crema.showDetails();      // Output: Crema: Hidratante para la piel.
  tonico.showDetails();     // Output: Tónico: Limpia y tonifica la piel.
  limpiadora.showDetails(); // Output: Limpiadora: Elimina impurezas y maquillaje.
  