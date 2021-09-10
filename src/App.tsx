import {
  IonApp,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react"
import React, { useState, useRef } from "react"
import {
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
  IonMenu,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonInput,
  IonLabel,
  IonItemDivider,
} from "@ionic/react"
import { calculatorOutline, refreshCircleOutline } from "ionicons/icons"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

const App: React.FC = () => {
  // const [searchText, setSearchText] = useState("")

  // const [text, setText] = useState<string>()
  // const [number, setNumber] = useState<number>()

  const [bmi, setBmi] = useState(0)

  const weightInputRef = useRef<HTMLIonInputElement>(null)
  const heightInputRef = useRef<HTMLIonInputElement>(null)

  const calcBMI = () => {
    const enterdWeight = weightInputRef.current!.value
    const enterdHeight = heightInputRef.current!.value

    if (!enterdHeight || !enterdWeight) {
      return
    }
    const bmi = +enterdWeight / (+enterdHeight * +enterdHeight)
    console.log(bmi)
  }
  const resetBMI = () => {}

  return (
    // <IonApp>
    //   <IonPage>
    //     <IonHeader>
    //       <IonToolbar>
    //         <IonTitle>BMI Calculator</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <IonContent>
    //       <IonSearchbar
    //         value={searchText}
    //         onIonChange={(e) => setSearchText(e.detail.value!)}
    //       ></IonSearchbar>
    //       <IonList>
    //         <IonItem>
    //           <IonLabel position="floating">Your Height in Meters</IonLabel>
    //           <IonInput value={text}></IonInput>
    //         </IonItem>
    //         <IonItem>
    //           <IonLabel position="floating">Your Weight in Kilograms</IonLabel>
    //           <IonInput value={text}></IonInput>
    //         </IonItem>
    //       </IonList>
    //       <IonButton>Calculate</IonButton>
    //       <IonButton>Reset</IonButton>
    //     </IonContent>
    //   </IonPage>
    // </IonApp>
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <IonTitle size="large">BMI CALCULATOR</IonTitle>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Height</IonLabel>
                  <IonInput ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Weight</IonLabel>
                  <IonInput ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-left">
                <IonButton onClick={calcBMI}>
                  <IonIcon slot="start" icon={calculatorOutline} />
                  Calculate
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-right">
                <IonButton onClick={resetBMI}>
                  <IonIcon slot="start" icon={refreshCircleOutline} />
                  Reset
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle></IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonApp>
  )
}
export default App
