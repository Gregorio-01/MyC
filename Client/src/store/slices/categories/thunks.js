import { categoriesApi } from "../../../API/usersAPI";
import { setCategories } from "./categoriesSlice";

export const getCategories = () => {
    return async function(dispatch) {
        const allCategories = categoriesApi();
        const response = await allCategories.get('/');
        const categories = response.data;
        dispatch(setCategories(categories));
    };
};