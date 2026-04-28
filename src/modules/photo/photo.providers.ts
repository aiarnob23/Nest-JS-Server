import { DataSource } from "typeorm";
import { Photo } from "./photo.entity";

export const photoProviers = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
        inject: ['DATA_SOURCE'],
    },
];