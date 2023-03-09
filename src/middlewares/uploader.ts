import { Request } from "express";
import multer from "multer";
import { nanoid } from 'nanoid/async';

const multerStorageConfig = (mainDirectory: string) => {
    return multer.diskStorage({
        destination(req, file, callback) {
            const fileType: string = file.mimetype.split('/')[0];
            const finalPath: string = `uploads/${mainDirectory}/${fileType}`;
            callback(null, finalPath);
        },
        async filename(req, file, callback) {
            const generateName: string = await nanoid();
            const fileName: string = `${generateName}.${file.mimetype.split('/')[1]}`
            callback(null, fileName)
        },
    });
}

const isAllowedMimetype = (mime: any) => {
    return [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/x-ms-bmp",
        "image/webp",
        "audio/aac",
        "audio/mpeg",
        "video/mp4",
        "application/pdf",
    ].includes(mime.toString());
}

let fileSize: any;

const fileFilter = (req: Request | any, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
    if (isAllowedMimetype(file.mimetype)) {
        const fileType = file.mimetype.split("/")[0];
        switch (fileType) {
            case "image":
                fileSize = 1000 * 5 //byte * 5 = 5 MB;
                break;
            case "audio":
                fileSize = 1000 * 10;
                break;
            case "video":
                fileSize = 1000 * 10;
                break;
            case "application":
                fileSize = 1000 * 5;
                break;
        }
        callback(null, true);
    } else {
        callback(null, false);
    }
};

const upload = (mainDirectory: string): multer.Multer => {
    return multer({
        storage: multerStorageConfig(mainDirectory),
        fileFilter: fileFilter,
        limits: {
            fileSize,
        },
    });
};

export default {
    storyFileUpload: upload('story-files')
}