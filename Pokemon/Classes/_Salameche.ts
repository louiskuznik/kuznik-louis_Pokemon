import TypeFeu from "./_TypeFeu";
import Pokemon from "../Interfaces/_Pokemon";

export default class Salameche extends TypeFeu implements Pokemon {
    _pvMax: number;
    _nom!: string;
    _pv: number;
    _type: string;
    _captif: boolean;
    _horsjeu: boolean;

    constructor(pvMax: number, degats: number) {
        super(degats);
        this._pvMax = pvMax;
        this._pv = pvMax;
        this._type = "feu";
        this._captif = false;
        this._horsjeu = false;
        this._nom = "salameche";
    }

    get pvMax() {
        return this._pvMax;
    }
    set pvMax(pvMax: number) {
        this._pvMax = pvMax;  
    }

    get pv() {
        return this._pv;
    }
    set pv(pv: number) {
        this._pv = pv;  
    }

    get nom() {
        return this._nom;
    }
    set nom(nom: string) {
        this._nom = nom;  
    }

    get type() {
        return this._type;
    }
    set type(type: string) {
        this._type = type;  
    }

    get captif() {
        return this._captif;
    }
    set captif(captif: boolean) {
        this._captif = captif;  
    }

    get horsjeu() {
        return this._horsjeu;
    }
    set horsjeu(horsjeu: boolean) {
        this._horsjeu = horsjeu;  
    }

    /**
     * 
     * @param cible 
     * @returns 
     */
     attaquer(cible: Pokemon): string {
        this.checkVivant();
        if (!this._horsjeu) {
            let degatsAttaque: number = 0;
            if (cible.type == "feu") {
                degatsAttaque = this.calculerDegatsContreFeu();
            } else if (cible.type == "eau") {
                degatsAttaque = this.calculerDegatsContreEau();
            } else if (cible.type == "plante") {
                degatsAttaque = this.calculerDegatsContrePlante();
            }
            cible.subirAttaque(degatsAttaque);
            return `${cible.nom} subbit ${degatsAttaque} dommages, nouveau points de vie: ${cible.pv}`;
        } else {
            return `On embete pas les morts ! \n ${this.nom} a actuellement ${this._pv} point de vie`;
        }
    }

    /**
     * 
     * @param degats 
     */
    // Permet d'éditer les PV du pokemon
    subirAttaque(degats: number): void {
        this._pv -= degats;
    }

    /**
     * 

     */
    // Si le pokemon n'a plus de PV, il ne peut plus attaquer
    // true = mort
    checkVivant(): void {
        if(this._pv <= 0) {
            this._horsjeu = true;
        }
    }

    /**
     * 
     */
    // Permet de restaurer les PV d'un pokemon
    soigner(): void {
        if(this._pv != this._pvMax) {
            this._pv = this._pvMax;
        }
    }

    /**
     * 
     * @param nom 
     */
    // Permet de donner un surnom au pokemon
    renommer(nom: string): void {
        this._nom = nom;
    }
}