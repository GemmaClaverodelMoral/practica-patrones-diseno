
// A B S T R A C T      F A C T O R Y

/* STEP 1. Declarar clases base para cada producto concreto
*  en el catálogo.
*
* Productos base: (sin familia)
*  - Button
*  - Menu
*  - Card
*/

class Button  {render() {throw new Error('Method not implemented!');}}
class Menu    {render() {throw new Error('Method not implemented!');}}
class Card    {render() {throw new Error('Method not implemented!');}}

/* STEP 2. Implementar clases de productos concretos que heredan
 *  las clases de productos base, el número de productos concretos
 *  dependerá del número de familias.
 *
 * Productos concretos:
 *  - NeomorphicButton
 *  - NeomorphicMenu
 *  - NeomorphicCard
 *  - MinimalismoBoton
 *  - MinimalismoTargeta
 *  - MinimalismoMenu
 */

//STEP 2A: Implementar productos concretos para la familia Neomorfismo
class NeomorphicButton extends Button {render() {console.log('Rendering a Neomorphic Button');}}
class NeomorphicMenu   extends Menu   {render() {console.log('Rendering a Neomorphic Menu');}}
class NeomorphicCard   extends Card   {render() {console.log('Rendering a Neomorphic Product Card');}}

// STEP 2B: Implementar productos concretos para la familia Minimalismo
class MinimalistButton extends Button {render() {console.log('Rendering a Minimalist Button');}}
class MinimalistMenu   extends Menu   {render() {console.log('Rendering a Minimalist Menu');}}
class MinimalistCard   extends Card   {render() {console.log('Rendering a Minimalist Product Card');}}


/* STEP 3. Declarar la clase de fábrica abstracta que creara los métodos
*  de creación para cada producto base. 
*
* Fábrica Abstracta: (sin familia)
*   - ElementFactory
*      * createButton
*      * createMenu
*      * createCard
*/

class ElementsFactory {
    createButton() {throw new Error('Method not implemented!');}
    createCard()   {throw new Error('Method not implemented!');}
    createMenu()   {throw new Error('Method not implemented!');}
}

/*
 * STEP 4. Crear fábricas concretas que heredan el comportamiento de la
 *  fábrica abstracta e implementan todos los métodos de creación de productos.
 *  El número de fábricas concretas dependerá del número de familias de productos.
 *
 * Fábricas Concretas:
 *  - NeomorfismoFactory
 *  - MinimalismoFactory
*/
class NeomorphicFactory extends ElementsFactory {
    createButton() {return new NeomorphicButton();}
    createMenu()   {return new NeomorphicMenu();}
    createCard()   {return new NeomorphicCard();}
}

class MinimalistFactory extends ElementsFactory {
    createButton() {return new MinimalistButton();}
    createMenu()   {return new MinimalistMenu();}
    createCard()   {return new MinimalistCard();}
}

// Código Cliente: 
// Usar la fábrica abstracta para crear familias de productos
function renderElements(factory) {
    const button = factory.createButton();
    const menu = factory.createMenu();
    const productCard = factory.createCard();

    button.render();
    menu.render();
    productCard.render();
}

//Llamadas
console.log('--- Render elements in a Neomorphic Style ---');
renderElements(new NeomorphicFactory());

console.log('--- Render elements in a Minimalist Style ---');
renderElements(new MinimalistFactory());
