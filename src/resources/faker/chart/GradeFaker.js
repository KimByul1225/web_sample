// import { faker } from "@faker-js/faker/locale/ko";
// import { faker } from "@faker-js/faker";

export function GradeFaker () {
    return{
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    year: "2019",
                    rating: "AA"
                },
                {
                    year: "2020",
                    rating: "A"
                },
                {
                    year: "2021",
                    rating: "C"
                },
                {
                    year: "2022",
                    rating: "BB"
                },
                {
                    year: "2023",
                    rating: "E"
                },
            ],
        }
    }
}