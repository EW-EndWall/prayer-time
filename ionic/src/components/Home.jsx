import { IonPage } from "@ionic/react";

import TimeList from "./TimeList";

const Home = (props) => {
  const { selectedCity } = props;

  return (
    <IonPage>
      <div className="md:w-2/4 w-9/12 mx-auto my-3 mt-9 p-3 rounded-lg bg-gray-400 dark:bg-gray-900">
        <TimeList selectedCity={selectedCity} />
      </div>
    </IonPage>
  );
};

export default Home;
