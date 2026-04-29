import { DataSource } from "typeorm";
import { Photo } from "./photo.entity";
import { DATA_SOURCE, PHOTO_REPOSITORY } from "../../common/constants/token";

export const photoProviers = [
    {
        provide: PHOTO_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
        inject: [DATA_SOURCE],
    },
];