// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function BannerFaker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    mainText: faker.lorem.lines({ min: 1, max: 1 }),
                    subText: faker.lorem.lines({ min: 1, max: 1 }),
                    imgPath: faker.image.urlPicsumPhotos({ width: 1920 }),
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    mainText: faker.lorem.lines({ min: 1, max: 1 }),
                    subText: faker.lorem.lines({ min: 1, max: 1 }),
                    imgPath: faker.image.urlPicsumPhotos({ width: 1920 }),
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    mainText: faker.lorem.lines({ min: 1, max: 1 }),
                    subText: faker.lorem.lines({ min: 1, max: 1 }),
                    imgPath: faker.image.urlPicsumPhotos({ width: 1920 }),
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    mainText: faker.lorem.lines({ min: 1, max: 1 }),
                    subText: faker.lorem.lines({ min: 1, max: 1 }),
                    imgPath: faker.image.urlPicsumPhotos({ width: 1920 }),
                    linkUrl: "https://github.com/KimByul1225"
                }
            ],
        }
    }
}