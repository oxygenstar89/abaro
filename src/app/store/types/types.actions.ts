import { createAction, props } from "@ngrx/store";

export const setTypes = createAction(
  '[Types] SetTypes',
  props<
    {
      data: {
        types: string[],
        supertypes: string[],
        subtypes: string[]
      }
    }
  >()
);

export const loadTypes = createAction(
  '[Types] LoadTypes'
);

export const loadTypesSuccess = createAction(
  '[Types] LoadTypesSuccess',
  props<
    {
      payload: any,
    }
  >()
);

export const loadSubtypes = createAction(
  '[Types] LoadSubtypes'
);

export const loadSubtypesSuccess = createAction(
  '[Types] LoadSubtypesSuccess',
  props<
    {
      payload: any,
    }
  >()
);

export const loadSupertypes = createAction(
  '[Types] LoadSupertypes'
);

export const loadSupertypesSuccess = createAction(
  '[Types] LoadSupertypesSuccess',
  props<
    {
      payload: any,
    }
  >()
);
