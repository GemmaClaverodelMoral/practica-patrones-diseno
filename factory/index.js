/**
 * How to implement Factory Method?
 *
 * 1. Declare base product class/interface, this will be returned by
 *  factory class and their sub classes.
 * 2. Implement concrete products sub classes that inherits/implements
 *  the base product class/interface.
 * 3. Declare base factory class/interface that returns objects that match
 *  the base product, not the concrete ones.
 * 4. Implement concrete factories sub classes that inherits/implements
 *  the base factory class/interface. These classes will return concrete
 *  products in their factory method.
*/

// CODIGO DE IMPLEMENTACION

// STEP 1 - Declare base product
  class Notification {
    send(message) {
        throw new Error('Method not implemented!');
    }
}

// STEP 2 - Implement concrete products
class EmailNotification extends Notification {
send(message) {
    console.log(`Enviando correo electrónico con el mensaje: ${message}`);
}
}

class SMSNotification extends Notification {
send(message) {
    console.log(`Enviando SMS con el mensaje: ${message}`);
}
}

// --COD1: -------------------------------------------------
// ----- aqui pondremos un nuevo tipo de notificacion
// ---------------------------------------------------------

// STEP 3 - Declare base factory
class NotificationFactory {
createNotification() {
    throw new Error('Method not implemented!');
}
}
// STEP 4 - Implement concrete factories
class EmailNotificationFactory extends NotificationFactory {
createNotification() {
    return new EmailNotification();
}
}

class SMSNotificationFactory extends NotificationFactory {
    createNotification() {
        return new SMSNotification();
    }
}

// -COD2: --------------------------------------------------
// ----- aqui pondremos una nueva fabrica
// ---------------------------------------------------------

// CODIGO CLIENTE

// STEP 5 -  - FUNCTION Y CALLS

function sendNotification(notificationFactory, message) {
    const notification = notificationFactory.createNotification();
    notification.send(message);
}

// Uso de las fábricas para enviar notificaciones

sendNotification(new EmailNotificationFactory(), 'Hola, este es un correo.');
sendNotification(new SMSNotificationFactory(), 'Hola, este es un SMS.');

// -COD3: ------------------------------------------------------
// ----- aqui pondremos un llamado a otro tipo de notificacion 
// -------------------------------------------------------------

// EJEMPLO - COD1 COD2 COD3
// Ahora tenemos NUEVAS notificaciones por whatsApp!
//

//COD1: en STEP 2: --------- Implements concrets products
// class WhatsAppNotification extends Notification {
//     send(message) {
//       console.log(`Enviando mensaje de WhatsApp con el mensaje: ${message}`);
//     }
// }
  
// COD2: en STEP 4: --------- Implements concrets fabrics
// class WhatsAppNotificationFactory extends NotificationFactory {
//     createNotification() {
//       return new WhatsAppNotification();
//     }
// }
  
// cod3: en SPEP 5: --------- calls
//   sendNotification(new WhatsAppNotificationFactory(), 'Hola, este es un mensaje de WhatsApp.');
  