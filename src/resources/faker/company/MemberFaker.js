import { faker } from "@faker-js/faker";
import MemberSample01 from "@/resources/images/company/member_sample_01.png";
import MemberSample02 from "@/resources/images/company/member_sample_02.png";
import MemberSample03 from "@/resources/images/company/member_sample_03.png";
import MemberSample04 from "@/resources/images/company/member_sample_04.png";
import MemberSample05 from "@/resources/images/company/member_sample_05.png";
import MemberSample06 from "@/resources/images/company/member_sample_06.png";
import MemberSample07 from "@/resources/images/company/member_sample_07.png";

export function MemberFaker() {
    return {
        resultMap: {
            result: true,
            message: "정상적으로 처리되었습니다.",
            resultList: [
                {
                    name: faker.person.fullName(),
                    jobTitle: faker.person.jobType(),
                    introduction: faker.lorem.sentence(),
                    image: MemberSample01,
                    itroduction: faker.lorem.lines({ min: 1, max: 3 }),
                },
                {
                    name: faker.person.fullName(),
                    jobTitle: faker.person.jobType(),
                    introduction: faker.lorem.sentence(),
                    image: MemberSample02,
                    itroduction: faker.lorem.lines({ min: 1, max: 3 }),
                },
                {
                    name: faker.person.fullName(),
                    jobTitle: faker.person.jobType(),
                    introduction: faker.lorem.sentence(),
                    image: MemberSample03,
                    itroduction: faker.lorem.lines({ min: 1, max: 3 }),
                },
                {
                    name: faker.person.fullName(),
                    jobTitle: faker.person.jobType(),
                    introduction: faker.lorem.sentence(),
                    image: MemberSample04,
                    itroduction: faker.lorem.lines({ min: 1, max: 3 }),
                },
                {
                    name: faker.person.fullName(),
                    jobTitle: faker.person.jobType(),
                    introduction: faker.lorem.sentence(),
                    image: MemberSample05,
                    itroduction: faker.lorem.lines({ min: 1, max: 3 }),
                },
                {
                    name: faker.person.fullName(),
                    jobTitle: faker.person.jobType(),
                    introduction: faker.lorem.sentence(),
                    image: MemberSample06,
                    itroduction: faker.lorem.lines({ min: 1, max: 3 }),
                },
                {
                    name: faker.person.fullName(),
                    jobTitle: faker.person.jobType(),
                    introduction: faker.lorem.sentence(),
                    image: MemberSample07,
                    itroduction: faker.lorem.lines({ min: 1, max: 3 }),
                },
            ],
        }
    }
}