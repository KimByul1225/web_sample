// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function HorizontalFaker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    value: faker.number.int({ max: 200 }),
                    avg: faker.number.int({ max: 200 })
                },
                {
                    value: faker.number.int({ max: 200 }),
                    avg: faker.number.int({ max: 200 })
                },
                {
                    value: faker.number.int({ max: 200 }),
                    avg: faker.number.int({ max: 200 })
                },
            ],
        }
    }
}