import { TypesStateType } from "../../services/pokedex-data.model";

export const selectTypes = (state: { types: TypesStateType}) => state.types['types'].data;
export const selectSubtypes = (state: { types: TypesStateType}) => state.types['subtypes'].data;
export const selectSupertypes = (state: { types: TypesStateType}) => state.types['supertypes'].data;
