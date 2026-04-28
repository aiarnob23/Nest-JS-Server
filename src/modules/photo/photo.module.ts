import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../database/database.module";
import { photoProviers } from "./photo.providers";
import { PhotoService } from "./photo.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...photoProviers,
        PhotoService,
    ],
})
export class PhotoModule {}