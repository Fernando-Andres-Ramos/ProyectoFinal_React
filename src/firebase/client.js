import { initializeApp } from "firebase/app";
import {doc,collection, getDoc, getDocs, getFirestore ,query,where} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBOsfkAdzx3PkFkNQUnbIUuFFFA1DfGTmc",
  authDomain: "awesome-vigil-329805.firebaseapp.com",
  projectId: "awesome-vigil-329805",
  storageBucket: "awesome-vigil-329805.appspot.com",
  messagingSenderId: "905383150617",
  appId: "1:905383150617:web:85b0779d561adf8de79688"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();


export class FirebaseClient{


  //Función para buscar un solo item segun la id recibida desde el componente solicitante
  async getItemById(itemId){
    try{
      const itemDoc = doc(db,"items",itemId);
      let datosBuscados = await getDoc(itemDoc)
      return(datosBuscados.data())
    }
    catch(error){
      console.error('Busqueda de detalles', error)
    }
  }


  //Función para buscar los items segun una categoria recibida desde el componente solicitante
  async itemsCategory(categoryId){
    try{
      if(categoryId){
        const itemCollection = query(collection(db,"items"),where("category","==",categoryId));
        let datosBuscados = await getDocs(itemCollection);
        return datosBuscados.docs.map((doc)=>({id: doc.id, ...doc.data()}));
      }
      else{
        const itemCollection = collection(db,"items");
        let datosBuscados = await getDocs(itemCollection);
        return datosBuscados.docs.map((doc)=>({id: doc.id, ...doc.data()}));
      }
    }
    catch(error){
      console.error('Busqueda de productos', error)
    }


    
  }
}


