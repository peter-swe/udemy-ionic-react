import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {Route} from "react-router-dom";
import {home as homeIcon, settings as settingsIcon} from "ionicons/icons";

import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import {IonReactRouter} from "@ionic/react-router";
import EntryPage from "./pages/EntryPage";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/entries/: id">
              <EntryPage />
            </Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/">
              <IonLabel>Home</IonLabel>
              <IonIcon icon={homeIcon} />
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settingsIcon} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
