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
            // resultList: [
            //     {
            //         index: 1,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 2,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 3,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 4,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 5,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 6,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 7,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 8,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 9,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 10,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 11,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 12,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            //     {
            //         index: 13,
            //         title: faker.lorem.lines({ min: 1, max: 1 }),
            //         date: faker.date.recent(),
            //     },
            // ],
            
        }
    }
}









