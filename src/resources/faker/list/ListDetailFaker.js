// import { faker } from "@faker-js/faker/locale/ko";
import { faker } from "@faker-js/faker";

export function ListDetailFaker() {
    return {
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            text: faker.lorem.lines({ min: 10, max: 30 }),
        }
    }
}