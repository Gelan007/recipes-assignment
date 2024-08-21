import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {recipesAPI} from "../../api/recipes";
import {Recipe} from "../../interfaces/recipes";
import {getTransformedRecipes} from "../utils/recipes";

export const getRecipes = createAsyncThunk(
    'recipes/getRecipes',
    async (payload, {rejectWithValue}) => {
        try {
            const response = await recipesAPI.getRecipes();

            return {data: response.data.meals}
        } catch (err: any) {
            return rejectWithValue(err);
        }
    });

export const getRecipeById = createAsyncThunk(
    'recipes/getRecipeById',
    async (payload: {id: string}, {rejectWithValue}) => {
        try {
            const response = await recipesAPI.getRecipeById(payload.id);

            return {data: response.data.meals}
        } catch (err: any) {
            return rejectWithValue(err);
        }
    });

const initialState = {
    isLoading: false,
    error: "" as string | null,
    recipes: [] as Recipe[],
    currentRecipe: null as null | Recipe,
   /* currentPage: 1,
    totalPagesCount: 1*/
}
export type RecipesInitialStateType = typeof initialState

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        /*setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecipes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.recipes = getTransformedRecipes((Array.isArray(action.payload.data) && action.payload.data) || []);
            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = "Invalid request"
            })
            .addCase(getRecipeById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getRecipeById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentRecipe = getTransformedRecipes((Array.isArray(action.payload.data) && action.payload.data) || [])[0];
            })
            .addCase(getRecipeById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = "Invalid request"
            });
    }
})

export const {

} = recipesSlice.actions;
export default recipesSlice.reducer;