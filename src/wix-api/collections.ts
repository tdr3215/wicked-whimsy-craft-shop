import { getWixClient } from "@/lib/wix-client.base";

export const getCollections = async (slug: string) => {
    const wixClient = getWixClient();
    const { collection } = await wixClient.collections.getCollectionBySlug(slug);

    return collection || null;




}