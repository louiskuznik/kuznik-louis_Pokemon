import Pokeball from "./_Pokeball";
import Pokemon from "../Interfaces/_Pokemon";

export default class Dresseur {
    private _nom: string;
    public _pokeballs!: Pokeball[];

    constructor(nom: string, ...pokeballs: Pokeball[]) {
        this._nom = nom;
        this._pokeballs = pokeballs;
    }

    public get nbPokeballs() {
        return this._pokeballs.length;
    }

    /**
     * 
     * @param nombre 
     */
    // On ajoute 1 ou plus pokeballs, dans un maximum de 6 !
    public ajouterPokeballs(nombre: number): void {
        let maxNewPokeballs = 6 - this._pokeballs.length;
        if(nombre > maxNewPokeballs) {
            nombre = maxNewPokeballs;
        }
        for (let i = 0; i < nombre; i++) {
            const emptyPokemon=  [] as  any;
            let nPokeball = new Pokeball(emptyPokemon, this);
            this._pokeballs.push(nPokeball);
        }
    }

    /**
     * 
     */
    // Vérifie si le dresseur a encore des pokeballs dispo
    private getPokeballs(): boolean {
        this._pokeballs.forEach(pokeball => {
            if (pokeball.getContenu() == "undefined") {
                return true;
            } else {
                return false;
            }
        });
        return true;
    }

    /**
     * 
     * @param cible 
     * @param dresseur 
     * @returns 
     */
    // affecte un pokemon à une pokeball, et précise son maitre au passage
    private fillEmptyPokeball(cible: Pokemon, dresseur: Dresseur): any {
        if (this.getPokeballs()) {
            let nPokeball = new Pokeball(cible, dresseur);
            this._pokeballs.push(nPokeball);
            return `Le ${dresseur._nom} a capturé ${cible.nom}`;
        }
    }

    /**
     * 
     * @param cible 
     */
    // Permet de vérifier si un pokemon n'a pas déjà été capturé,
    // Appelle 'fillEmptyPokeball'
    public capturer(cible: Pokemon): void {
        if (!cible.captif) {
            this.fillEmptyPokeball(cible, this);
        }
    }

    /**
     * 
     */
    // Affiche les pokemons contenus dans chaque pokeball
    public getPokemons() {
        let returnStr = `Les pokeballs de ${this._nom} contiennent `;
        this._pokeballs.forEach(pokeball => {
            returnStr += `${pokeball.getContenu()} .`;
        });
        return returnStr;
    }
}