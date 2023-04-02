import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { AddTagDto } from "../dto/add-tag.dto";
import { GetAllTagDto } from "../dto/get-all-tag.dto";
import { GetTagDto } from "../dto/get-tag.dto";
import { tagRepository } from "../repository/tag.repository";

const addTag = async (addTagDto: AddTagDto): Promise<boolean | BaseError> => {
    await tagRepository.addTag(addTagDto);
    return true;
}

const getTag = async (getTagDto: GetTagDto): Promise<object | BaseError> => {
    const tag = await tagRepository.getTag(getTagDto);
    return tag;
}

const getAllTag = async (getAllTagDto: GetAllTagDto): Promise<object | BaseError> => {
    const tags = await tagRepository.getAllTag(getAllTagDto);
    return {
        count: tags[1],
        page: getAllTagDto.page,
        limit: getAllTagDto.limit,
        rows: tags[0],
    };
}

export default {
    addTag,
    getTag,
    getAllTag
}