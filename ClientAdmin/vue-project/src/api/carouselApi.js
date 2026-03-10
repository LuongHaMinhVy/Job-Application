import { db } from "@/firebase/config";
import { collection, doc, updateDoc } from "firebase/firestore";
const carouselCollection = collection(db, "carousel");
export const updateCarouselApi = async (carouselData) => {
  try {
    const carouselRef = doc(carouselCollection, carouselData.id);
    await updateDoc(carouselRef, carouselData);
    return carouselData;
  } catch (error) {
    console.error("Error updating carousel:", error);
  }
};
