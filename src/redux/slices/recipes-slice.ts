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

const initialState = {
    isLoading: false,
    error: "" as string | null,
    recipes: [] as Recipe[],
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
               /* state.totalPagesCount = action.payload.totalPagesCount
                if(action.payload.isLoadMore) {
                    state.users = [...state.users, ...action.payload.data.users]
                } else {
                    state.users = action.payload.data.users
                }*/
            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = "Invalid request"
            });
    }
})

export const {

} = recipesSlice.actions;
export default recipesSlice.reducer;