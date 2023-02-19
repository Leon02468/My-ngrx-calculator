import { createAction, props } from "@ngrx/store";

export const press_key = createAction(
    '[Cal] press key',
    props<{key: string, key_type: string}>()
);