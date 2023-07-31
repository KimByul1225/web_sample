// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function DoughnutFaker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    label: "AA",
                    data: faker.number.int({ max: 99 })
                },
                {
                    label: "A",
                    data: faker.number.int({ max: 99 })
                },
                {
                    label: "BB",
                    data: faker.number.int({ max: 99 })
                },
                {
                    label: "B",
                    data: faker.number.int({ max: 99 })
                },
                {
                    label: "C",
                    data: faker.number.int({ max: 99 })
                },
                {
                    label: "D",
                    data: faker.number.int({ max: 99 })
                },
                {
                    label: "E",
                    data: faker.number.int({ max: 99 })
                },
            ],
        }
    }
}