import Type from '../_Interfaces/_Type';

export default abstract class TypeFeu implements Type {
    degats: number;

    constructor(_degats: number) {
        this.degats = 10;
    }

    /**
     * 
     * @returns 
     */
    calculerDegatsContreFeu(): number {
        return this.degats;
    }

    /**
     * 
     * @returns 
     */
    calculerDegatsContreEau(): number {
        return this.degats * 0.5;
    }

    /**
     * 
     * @returns 
     */
    calculerDegatsContrePlante(): number {
        return this.degats * 1.5;
    }
}