/* eslint-disable @typescript-eslint/no-explicit-any */
import { getWixClient } from "@/lib/wix-client.base";

export const getCart = async () => {
    const wixClient = getWixClient();
  
    try {
      return await wixClient.currentCart.getCurrentCart();
    } catch (error: any) {
      if (error.details.applicationError.code === "OWNED_CART_NOT_FOUND") {
        return null;
      } else {
        throw error;
      }
    }
  };