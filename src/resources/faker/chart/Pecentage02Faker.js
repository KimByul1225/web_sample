// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function Pecentage02Faker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    year: "2019",
                    pecentage: faker.number.int({ min: -100, max: 100 })
                },
                {
                    year: "2020",
                    pecentage: faker.number.int({ min: -100, max: 100 })
                },
                {
                    year: "2021",
                    pecentage: faker.number.int({ min: -100, max: 100 })
                },
                {
                    year: "2022",
                    pecentage: faker.number.int({ min: -100, max: 100 })
                },
                {
                    year: "2023",
                    pecentage: faker.number.int({ min: -100, max: 100 })
                },
            ],
        }
    }
}