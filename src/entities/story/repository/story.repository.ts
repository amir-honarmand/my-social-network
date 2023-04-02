import { postgres } from "../../../database/postgres";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { pagination } from "../../../utils/pagination";
import { AddStoryDto } from "../dto/add-story.dto";
import { DeleteStoryDto } from "../dto/delete-story.dto";
import { EditStoryDto } from "../dto/edit-story.dto";
import { GetAllStoryDto } from "../dto/get-all-story.dto";
import { GetStoryDto } from "../dto/get-story.dto";
import { StoryStatus } from "../enums/story-status.enum";
import { Story } from "../models/story.model";
import { storyDetailsRepository } from "./story-details.repository";

export const storyRepository = (() => {
    async function addStory(addStoryDto: AddStoryDto): Promise<void> {
        await postgres.getRepository(Story).insert({
            caption: addStoryDto.caption,
            content_url: addStoryDto.content_url,
            tags_id: addStoryDto.tags_id,
            favorites_id: addStoryDto.favorites_id,
            story_details_id: addStoryDto.story_details_id,
            user_id: addStoryDto.user_id,
            hide_statistics: addStoryDto.hide_statistics,
            turn_off_comments: addStoryDto.turn_off_comments,
            // status: addStoryDto.status
        });
    }

    async function getStory(getStoryDto: GetStoryDto): Promise<Story> {
        const story = await postgres.getRepository(Story).findOne({
            where: {
                id: getStoryDto.storyId,
                status: StoryStatus.PUBLISHED
            },
            select: {
                user_id: { id: true, avatar: true, user_name: true },
                story_details_id: { id: true, share_count: true, view_count: true, comment_count: true, like_count: true },
            },
            relations: {
                story_details_id: true,
                user_id: true
            }
        });

        if (!story) {
            throw new BaseError(HttpStatusMessages.NOT_FOUND, HttpStatusCodes.NOT_FOUND, '')
        };

        return story;
    }

    async function getAllStory(getAllStoryDto: GetAllStoryDto): Promise<[Story[], number]> {
        const skip: number = pagination(getAllStoryDto.page, getAllStoryDto.limit);

        const stories = await postgres.getRepository(Story).findAndCount({
            where: { status: StoryStatus.PUBLISHED },
            order: { createdAt: 'DESC' },
            skip,
            take: getAllStoryDto.limit,
            select: {
                user_id: { id: true, avatar: true, user_name: true },
                story_details_id: { id: true, share_count: true, view_count: true, comment_count: true, like_count: true },
            },
            relations: {
                story_details_id: true,
                user_id: true
            }
        });

        return stories;
    }

    async function editStory(editStoryDto: EditStoryDto, userId: number): Promise<void> {
        const story = await postgres.getRepository(Story).update(
            { id: editStoryDto.id, user_id: userId },
            {
                caption: editStoryDto.caption,
                tags_id: editStoryDto.tags_id,
                favorites_id: editStoryDto.favorites_id,
                status: editStoryDto.status,
                turn_off_comments: editStoryDto.turn_off_comments
            }
        );

        if (!story.affected) {
            throw new BaseError(
                HttpStatusMessages.UNPROCESSABLE_ENTITY,
                HttpStatusCodes.UNPROCESSABLE_ENTITY,
                HttpStatusMessages.UPDATE_FAILED
            )
        }
    }

    async function deleteStoryTransaction(deleteStoryDto: DeleteStoryDto, userId: number): Promise<void> {
        const queryRunner = postgres.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            await queryRunner.manager.withRepository(postgres.getRepository(Story))
            .softDelete({
                id: deleteStoryDto.storyId, user_id: userId
            });
            
            await storyDetailsRepository.deleteStoryDetailsWithTransaction(deleteStoryDto.storyId, queryRunner);

            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw new BaseError(
                HttpStatusMessages.UNPROCESSABLE_ENTITY,
                HttpStatusCodes.UNPROCESSABLE_ENTITY,
                HttpStatusMessages.DELETE_FAILED
            )
        } finally {
            await queryRunner.release();
        }
    }

    return {
        addStory,
        getStory,
        getAllStory,
        editStory,
        deleteStoryTransaction,
    };
})();