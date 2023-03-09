import config from "../config";

export const createFileUploadedUrl = (file: Express.Multer.File): string => {
    let destination: string;
    let fileName: string;
    let baseUrl: string;

    destination = file.destination;
    fileName = file.filename;
    baseUrl = config.BASE_URL;

    return `${baseUrl}/${destination}/${fileName}`;
}