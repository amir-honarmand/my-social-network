import { postgres } from "../../../database/postgres";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { DeleteStoryDetailsDto } from "../dto/delete-story-details.dto";
import { StoryDetails } from "../models/story-details.model";

export const storyDetailsRepository = (() => {
    async function addStoryDetails(): Promise<number> {
        const storyDetails = await postgres.getRepository(StoryDetails).insert({});
        return storyDetails.raw[0].id;
    }

    async function deleteStoryDetailsByStoryId(storyId: number): Promise<void> {
        const storyDetails = await postgres.getRepository(StoryDetails).softDelete({
            story_id: storyId,
        })

        if (!storyDetails.affected) {
            throw new BaseError(
                HttpStatusMessages.UNPROCESSABLE_ENTITY,
                HttpStatusCodes.UNPROCESSABLE_ENTITY,
                HttpStatusMessages.DELETE_FAILED
            )
        }
    }

    return {
        addStoryDetails,
        deleteStoryDetailsByStoryId,
    };
})();