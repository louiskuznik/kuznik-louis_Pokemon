import Type from '../Interfaces/_Type';

export default abstract class TypeEau implements Type {
    degats: number;

    constructor(_degats: number) {
        this.degats = 10;
    }

    /**
     * 
     * @returns 
     */
    calculerDegatsContreFeu(): number {
        return this.degats * 1.5;
    }

    /**
     * 
     * @returns 
     */
    calculerDegatsContreEau(): number {
        return this.degats;
    }

    /**
     * 
     * @returns 
     */
    calculerDegatsContrePlante(): number {
        return this.degats * 0.5;
    }
}