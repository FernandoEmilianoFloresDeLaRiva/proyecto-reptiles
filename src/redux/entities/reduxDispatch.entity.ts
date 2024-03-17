import { useDispatch } from "react-redux";
import { store } from "../indexStore";

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
