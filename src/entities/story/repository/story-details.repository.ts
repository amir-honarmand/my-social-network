import { postgres } from "../../../database/postgres";
import { StoryDetails } from "../models/story-details.model";

export const storyDetailsRepository = (() => {
    async function addStoryDetails(): Promise<number> {
        const storyDetails = await postgres.getRepository(StoryDetails).insert({});
        return storyDetails.raw[0].id;
    }

    return {
        addStoryDetails,
    };
})();