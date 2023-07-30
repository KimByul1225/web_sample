// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function Pecentage01Faker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            grade: {
                AA: faker.number.int({ min: 1, max: 100 }),
                A: faker.number.int({ min: 1, max: 100 }),
                BB: faker.number.int({ min: 1, max: 100 }),
                B: faker.number.int({ min: 1, max: 100 }),
                C: faker.number.int({ min: 1, max: 100 }),
                D: faker.number.int({ min: 1, max: 100 }),
                E: faker.number.int({ min: 1, max: 100 }),
            }
        }
    }
}