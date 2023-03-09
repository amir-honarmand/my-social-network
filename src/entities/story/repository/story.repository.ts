import { postgres } from "../../../database/postgres";
import { AddStoryDto } from "../dto/add-story.dto";
import { Story } from "../models/story.model";

export const storyRepository = (() => {
    async function addStory(addStoryDto: AddStoryDto): Promise<void> {
        await postgres.getRepository(Story).insert({
            caption: addStoryDto.caption,
            content_url: addStoryDto.content_url,
            tags_id: addStoryDto.tags_id,
            favorites_id: addStoryDto.favorites_id,
            story_details_id: addStoryDto.story_details_id,
            storyboard_id: addStoryDto.storyboard_id,
            user_id: addStoryDto.user_id,
        });
    }

    return {
        addStory
    };
})();