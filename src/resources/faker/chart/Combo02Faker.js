// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function Combo02Faker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    year: "2019",
                    barData: faker.number.int({ max: 100 }),
                    lineData: faker.number.int({ max: 100 }),
                },
                {
                    year: "2020",
                    barData: faker.number.int({ max: 100 }),
                    lineData: faker.number.int({ max: 100 }),
                },
                {
                    year: "2021",
                    barData: faker.number.int({ max: 100 }),
                    lineData: faker.number.int({ max: 100 }),
                },
                {
                    year: "2022",
                    barData: faker.number.int({ max: 100 }),
                    lineData: faker.number.int({ max: 100 }),
                },
                {
                    year: "2023",
                    barData: faker.number.int({ max: 100 }),
                    lineData: faker.number.int({ max: 100 }),
                },
                
            ],
        }
    }
}