import { postgres } from "../../../database/postgres";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { pagination } from "../../../utils/pagination";
import { AddTagDto } from "../dto/add-tag.dto";
import { GetAllTagDto } from "../dto/get-all-tag.dto";
import { GetTagDto } from "../dto/get-tag.dto";
import { TagStatus } from "../enums/tag-status.enum";
import { Tag } from "../models/tag.model";

export const tagRepository = (() => {
    async function addTag(addTagDto: AddTagDto): Promise<void> {
        await postgres.getRepository(Tag).insert({
            title: addTagDto.title
        });
    }

    async function getTag(getTagDto: GetTagDto): Promise<Tag> {
        const tag = await postgres.getRepository(Tag).findOne({
            where: {
                id: getTagDto.tagId,
                status: TagStatus.ACTIVE
            },
            select: ['id', 'title'],
        });

        if (!tag) {
            throw new BaseError(HttpStatusMessages.NOT_FOUND, HttpStatusCodes.NOT_FOUND, '')
        };

        return tag;
    }

    async function getAllTag(getAllTagDto: GetAllTagDto): Promise<[Tag[], number]> {
        const skip: number = pagination(getAllTagDto.page, getAllTagDto.limit);

        const tags = await postgres.getRepository(Tag).findAndCount({
            where: {status: TagStatus.ACTIVE},
            skip,
            take: getAllTagDto.limit,
            select: ['id', 'title'],
        });

        return tags;
    }

    return {
        addTag,
        getTag,
        getAllTag
    };
})();