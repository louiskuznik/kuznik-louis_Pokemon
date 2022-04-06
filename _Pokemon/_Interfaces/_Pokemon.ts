export default interface Pokemon {
    nom: string;
    pv: number;
    pvMax: number;
    type: string;
    captif: boolean;
    horsjeu: boolean;

    attaquer(cible: Pokemon): string;
    subirAttaque(degats: number): void;
    soigner(): void;
    renommer(nom: string): void;
}