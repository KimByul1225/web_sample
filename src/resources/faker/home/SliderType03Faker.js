import { GradeType } from "@/types/commons/grade";
import { faker } from "@faker-js/faker";

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
                    grade: GradeType.aa,
                    grade02: GradeType.a,
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    companyName: faker.company.name(),
                    keword: faker.location.countryCode(),
                    keword02: faker.lorem.word(),
                    grade: GradeType.bb,
                    grade02: GradeType.b,
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    companyName: faker.company.name(),
                    keword: faker.location.countryCode(),
                    keword02: faker.lorem.word(),
                    grade: GradeType.c,
                    grade02: GradeType.d,
                    linkUrl: "https://github.com/KimByul1225"
                },
                {
                    companyName: faker.company.name(),
                    keword: faker.location.countryCode(),
                    keword02: faker.lorem.word(),
                    grade: GradeType.e,
                    grade02: GradeType.e,
                    linkUrl: "https://github.com/KimByul1225"
                },
            ],
        }
    }
}