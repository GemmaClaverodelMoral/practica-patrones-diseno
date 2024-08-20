/*

**Pasos para implementar este patrón de diseño:**

STEP 1:	Declarar una clase base o interfaz prototipo que contenga los métodos de clonación.
STEP 2:	Crea productos concretos que heredan o implementan de la interfaz creada en el STEP 1, con esto se asegura que tenga el método clone (Se prioriza la configuración)

*/

// STEP 1: Declarar una clase base que contiene el método de clonación y las propiedades comunes.
class Car {
    constructor({ 
        model = '', 
        color = '' 
    } = {}) 
    {
      this.model = model;
      this.color = color;
    }
  
    // Método de clonación que debe ser sobrescrito en las clases concretas.
    clone() {
      throw new Error('Method not implemented!');
    }
}
  
// STEP 2: Crear una clase concreta que hereda de la clase base y sobrescribe el método de clonación.
class Deportivo extends Car {
    constructor(carToClone) {
        super({
        model: carToClone?.model,
        color: carToClone?.color,
        });
    }

    // Sobrescribe el método de clonación.
    clone() {
        return new Deportivo(this);
    }
}

// Ejemplo de uso del patrón Prototype.
const originalDeportivo = new Deportivo({ model: 'Coupe', color: 'Red' });
const clonedDeportivo = originalDeportivo.clone();

console.log('Original Deportivo:', originalDeportivo);
// Original Deportivo: Deportivo { model: 'Coupe', color: 'Red' }
console.log('Cloned Deportivo:', clonedDeportivo);
//Cloned Deportivo: Deportivo { model: 'Coupe', color: 'Red' }
  