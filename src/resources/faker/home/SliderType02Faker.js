import { faker } from "@faker-js/faker";

export function SliderType02Faker() {
    return {
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    title: faker.lorem.lines({ min: 1, max: 1 }),
                    date: faker.date.recent(),
                    imgPath: faker.image.urlPicsumPhotos({ width: 480 }),
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    title: faker.lorem.lines({ min: 1, max: 1 }),
                    date: faker.date.recent(),
                    imgPath: faker.image.urlPicsumPhotos({ width: 480 }),
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    title: faker.lorem.lines({ min: 1, max: 1 }),
                    date: faker.date.recent(),
                    imgPath: faker.image.urlPicsumPhotos({ width: 480 }),
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    title: faker.lorem.lines({ min: 1, max: 1 }),
                    date: faker.date.recent(),
                    imgPath: faker.image.urlPicsumPhotos({ width: 480 }),
                    linkUrl: "https://github.com/KimByul1225"
                },
            ],
        }
    }
}