import { basename, extname } from "path";
import { diskStorage } from "multer";
import { HttpException, HttpStatus } from "@nestjs/common";
import cyrillicToTranslit from "cyrillic-to-translit-js";

// Multer configuration
export const multerConfig = {
  dest: "public",
};

// Multer upload options
export const multerOptions = {
  // Enable file size limits
  limits: {
    fileSize: 16777216,
  },
  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
      // Allow storage of file
      cb(null, true);
    } else {
      // Reject file
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
  // Storage properties
  storage: diskStorage({
    destination: "public",
    filename: (req, file, cb) => {
      file.originalname = Buffer.from(file.originalname, "latin1").toString(
        "utf8",
      );
      const originalName = basename(file.originalname,extname(file.originalname),);
      const transliteratedName = cyrillicToTranslit({preset: 'ru'}).transform(originalName).replace(/\s/g, "_");

      cb(
        null,
        `${transliteratedName}.${Date.now()}${extname(file.originalname)}`,
      );
    },
  }),
};
