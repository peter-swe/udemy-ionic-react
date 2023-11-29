import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {useParams} from "react-router";

const EntryPage: React.FC = () => {
  const {id} = useParams();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Entry {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">this is the entry page</IonContent>
    </IonPage>
  );
};

export default EntryPage;
