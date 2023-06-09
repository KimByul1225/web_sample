import { faker } from "@faker-js/faker";

export function TextTypeFaker() {
    let forArr = [];
    for (let i = 0; i < 35; i++) {
        forArr.push(
            {
                index: i+1,
                title: faker.lorem.lines({ min: 1, max: 1 }),
                date: faker.date.recent(),
            }
        );
    }
    return {
        
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: forArr
        }
    }
}









