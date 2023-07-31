import { faker } from "@faker-js/faker/locale/ko";

export function DoughnutTableFaker () {
    let forArr = [];
    for (let i = 0; i < 24; i++) {
        forArr.push(
            {
                data: faker.number.int({ min: 0, max: 100 }),
                label: faker.company.name(),
            }
        );
    }

    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: forArr
        }
    }
}