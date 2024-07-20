import { createReducer, on } from "@ngrx/store";
import { loadSubtypes, loadSubtypesSuccess, loadSupertypes, loadSupertypesSuccess, loadTypes, loadTypesSuccess, setTypes } from "./types.actions";
import { StoreType } from "../../services/pokedex-data.model";

const initialState: {types: StoreType, subtypes: StoreType, supertypes: StoreType} = {
  types: {
    loading: false,
    errors: null,
    data: []
  },
  subtypes:  {
    loading: false,
    errors: null,
    data: []
  },
  supertypes:  {
    loading: false,
    errors: null,
    data: []
  },
}

export const typesReducer = createReducer(
  initialState,

  on(loadTypes, (state) => {
    return {
      ...state,
      types: {
        ...state.types,
        loading: true,
      }
    };
  }),

  on(loadTypesSuccess, (state, { payload }) => {
    return {
      ...state,
      types: {
        ...state.types,
        data: payload,
      }
    };
  }),

  on(loadSubtypes, (state) => {
    return {
      ...state,
      subtypes: {
        ...state.subtypes,
        loading: true,
      }
    };
  }),

  on(loadSubtypesSuccess, (state, { payload }) => {
    return {
      ...state,
      subtypes: {
        ...state.subtypes,
        data: payload,
      }
    };
  }),

  on(loadSupertypes, (state) => {
    return {
      ...state,
      subtypes: {
        ...state.subtypes,
        loading: true,
      }
    };
  }),

  on(loadSupertypesSuccess, (state, { payload }) => {
    return {
      ...state,
      supertypes: {
        ...state.supertypes,
        data: payload,
      }
    };
  }),
);
