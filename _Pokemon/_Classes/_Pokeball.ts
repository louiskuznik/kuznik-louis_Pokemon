import Pokemon from "../_Interfaces/_Pokemon";
import Dresseur from "./_Dresseur";

export default class Pokeball {
    private _contient!: Pokemon;
    public _proprietaire!: Dresseur;

    constructor(contient?: Pokemon, proprietaire?: Dresseur) {
        this._contient = contient!;
        this._proprietaire = proprietaire!;
    }

    /**
     * 
     * @returns 
     */
    // retourne le pokemon affecter dans cette pokeball
    public getContenu(): string {
        return `${this._contient.nom}`;
    }

    /**
     * 
     * @param contient 
     */
    // Affecte un pokemon à sa pokeball
    public affecterPokemon(contient: Pokemon) {
        this._contient = contient;
    }
}