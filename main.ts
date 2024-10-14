/**
 * PCA9685 
 */
//% weight=100 color=#ff0000 icon="\uf500"
namespace pruebadua {
    //% block
    export function on(num1 : number, num2 : number) : number{
        let resultado = num1 + num2;
        return resultado;
    }
    //% block
    export function off(num1 : number, num2 : number) : number{
        let resultado = num1 - num2;
        return resultado;
    }
    //% block
    export function pruebapins(num1 : number) : number{
        pins.digitalWritePin(DigitalPin.P1, 1);
        return num1+1:
    }   
}
