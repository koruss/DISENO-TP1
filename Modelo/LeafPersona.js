import { AbstractPersona } from './AbstractPersona.js';
/**
 * LeafPersona.
 *
 * @class LeafPersona
 * @extends {AbstractPersona}
 */
export class LeafPersona extends AbstractPersona {
    constructor(id,nombre,estado,telefono,correo,direccion,tipo) {
        super(id,nombre,estado,telefono,correo,direccion,tipo);
    }
    
    operation() {
        return this.nombre;
    }

  }
 