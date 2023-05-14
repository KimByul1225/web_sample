import { faker } from "@faker-js/faker/locale/ko";

export function SliderType03Faker() {
    return {
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    companyName: faker.company.name(),
                    keword: faker.location.countryCode(),
                    keword02: faker.lorem.word(),
                    grade: "aa",
                    grade02: "a",
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    companyName: faker.company.name(),
                    keword: faker.location.countryCode(),
                    keword02: faker.lorem.word(),
                    grade: "bb",
                    grade02: "b",
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    companyName: faker.company.name(),
                    keword: faker.location.countryCode(),
                    keword02: faker.lorem.word(),
                    grade: "c",
                    grade02: "d",
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    companyName: faker.company.name(),
                    keword: faker.location.countryCode(),
                    keword02: faker.lorem.word(),
                    grade: "e",
                    grade02: "e",
                    linkUrl: "https://github.com/KimByul1225"
                },
            ],
        }
    }
}