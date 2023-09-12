import { AppState, useAppSelector } from "../store/configureStore";

export const useSelectors = () => {
    const auth = useAppSelector((state: AppState) => state.auth);
    return {auth}
}