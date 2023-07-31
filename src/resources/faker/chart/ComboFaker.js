// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function ComboFaker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    evaluationYear: "2019",
                    average: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    value: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    max: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    min: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                },
                {
                    evaluationYear: "2020",
                    average: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    value: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    max: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    min: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                },
                {
                    evaluationYear: "2021",
                    average: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    value: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    max: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    min: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                },
                {
                    evaluationYear: "2022",
                    average: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    value: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    max: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    min: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                },
                {
                    evaluationYear: "2023",
                    average: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    value: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    max: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                    min: faker.number.int({ min: 10, max: 100, precision: 0.1 }),
                }
                
            ],
        }
    }
}