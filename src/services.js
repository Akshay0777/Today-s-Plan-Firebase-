import {db} from "./firebasescript";

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const planCollectionRef = collection(db,"plans");
class PlanService{
    addPlan = (newPlan) => {
        return addDoc(planCollectionRef, newPlan);
    };

    updatePlan = (id, updatedPlan) =>{
        const planDoc = doc(db, "plans", id);
        return updateDoc(planDoc, updatedPlan);
    };

    deletePlan = (id) =>{
        const planDoc = doc(db, "plans", id);
        return deleteDoc(planDoc);
    };

    getAllPlans = () =>{
        return getDocs(planCollectionRef);
    };

    getPlan = (id) =>{
        const planDoc = doc(db, "plans", id);
        return getDocs(planDoc);
    };
}

export default new PlanService();