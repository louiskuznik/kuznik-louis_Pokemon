export default interface Type {
    degats: number;

    calculerDegatsContreFeu(): number;
    calculerDegatsContreEau(): number;
    calculerDegatsContrePlante(): number;
}