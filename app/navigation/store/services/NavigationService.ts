import { NavigationContainerRef } from "@react-navigation/native";
import { AppDispatch } from "../../../redux/store/configureStore";
import { setCurrentNavAction } from "../reducers/NavigationReducer";
import { InstanceGetUtility } from "../../../utils/InstanceGetUtility";


export interface Route {
    name: string;
}
export interface NavState {
    currentNav?: string;
}

export interface NavigationService {
    setNavigationContainerComponent(
        navigationContainerComponent: NavigationContainerRef<ReactNavigation.RootParamList> | null,
    ): void;
    navToBack(): void;
    resetNavToLogin(dispatch: AppDispatch): void;
    navToTop(): void;
}

export class NavigationServiceImpl implements NavigationService {
    private navigationContainerComponent?: NavigationContainerRef<ReactNavigation.RootParamList> | null;

    setNavigationContainerComponent(
        navigationContainerComponent: NavigationContainerRef<ReactNavigation.RootParamList> | null,
    ): void {
        this.navigationContainerComponent = navigationContainerComponent;
    }

    navToBack(): void {
        this.navigationContainerComponent?.goBack();
    }


    navToTop(): void {
        this.navigationContainerComponent?.popToTop();
    }

     resetNavToLogin(dispatch: AppDispatch): void {
        dispatch(setCurrentNavAction('Auth'));
        this.navigationContainerComponent?.reset({
            index: 0,
            routes: [{ name: 'Auth' }],
        });
    }

    private static INSTANCE: NavigationService;

    static getInstance(): NavigationService {
        this.INSTANCE = InstanceGetUtility.getInstance(
            NavigationServiceImpl,
            this.INSTANCE,
        );
        return this.INSTANCE;
    }
}




