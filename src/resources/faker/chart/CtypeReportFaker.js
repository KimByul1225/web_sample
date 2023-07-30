// import { faker } from '@faker-js/faker';

import { faker } from "@faker-js/faker/locale/ko";


export function ctypeReportFakerData () {
	return{
          resultMap: {
               companyInfo: {
                    companyName: faker.company.name(),
                    evalYear: "2022 상반기",
                    symbol: "00050",
                    sectorNm: faker.word.adjective(),
                    assetScaleNm: "2조원이상",
               },
               esgTotalEvaluation: {
                    total: {
                         board: {
                              totalScore: {
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   compare: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   icon: "down"
                              },
                              totalGrade : "aa",
                              totalRank: {
                                   rank: faker.datatype.number({ min: 1, max: 1000}).toString(),
                                   companyCount:  faker.datatype.number({ min: 1, max: 1100}).toString(),
                              },
                         },
                         rankDistribution: {
                              AA: faker.datatype.number({ min: 1, max: 100}).toString(),
                              A: faker.datatype.number({ min: 1, max: 100}).toString(),
                              BB: faker.datatype.number({ min: 1, max: 100}).toString(),
                              B: faker.datatype.number({ min: 1, max: 100}).toString(),
                              C: faker.datatype.number({ min: 1, max: 100}).toString(),
                              D: faker.datatype.number({ min: 1, max: 100}).toString(),
                              E: faker.datatype.number({ min: 1, max: 100}).toString(),
                         },
                         rankChange: [
                              {
                                   year: "2019 상반기",
                                   rating: "AA"
                              },
                              {
                                   year: "2030 상반기",
                                   rating: "BB"
                              },
                              {
                                   year: "1592 상반기",
                                   rating: "C"
                              },
                              {
                                   year: "2022 상반기",
                                   rating: "BB"
                              },
                         ],
                         scoreChange: [
                              {
                                   evaluationYear: "2019 상반기" ,
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2020 상반기" ,
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2021 상반기" ,
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2022 상반기" ,
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              }
                         ]
                    },
                    esgSector: {
                         board: {
                              sector: {
                                   sectorNm: faker.datatype.string(5),
                                   unvrsCount: faker.datatype.number({ min: 10, max: 100 }).toString(),
                              },
                              sectorRank: {
                                   rank: "54/150",
                                   ratio: faker.datatype.number({ min: 0, max: 100 }).toString(),
                              },
                              sectorMaxRank: [
                                   {
                                        rank: "1",
                                        companyName: faker.company.name(),
                                        score: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   },
                                   {
                                        rank: "2",
                                        companyName: faker.company.name(),
                                        score: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   },
                                   {
                                        rank: "3",
                                        companyName: faker.company.name(),
                                        score: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   }
                              ]
                         },
                         scoreChange: [
                              {
                                   evaluationYear: "2019 상반기",
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2020 상반기",
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2021 상반기",
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2022 상반기",
                                   average: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 10, max: 100, precision: 0.1 }).toString(),
                              },
                         ],
                         categoryChartG: [
                              {
                                   title: "지배구조",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
                              {
                                   title: "정보의 투명성",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "down"
                              },
                              {
                                   title: "이사회의 구성과 활동",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "down"
                              },
                              {
                                   title: "이사의 보수",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "-"
                              },
                              {
                                   title: "관계사 위험",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: "0",
                                   icon: "up"
                              },
                              {
                                   title: "지속가능경영",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: "평가제외",
                                   icon: "up"
                              },
                         ],
                         categoryChartE: [
                              {
                                   title: "환경",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "down"
                              },
                              {
                                   title: "정보의 투명성",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "down"
                              },
                              {
                                   title: "이사회의 구성과 활동",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "down"
                              },
                              {
                                   title: "이사의 보수",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "-"
                              },
                              {
                                   title: "관계사 위험",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "-"
                              },
                              {
                                   title: "지속가능경영",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
                         ],
                         categoryChartS: [
                              {
                                   title: "사회",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "down"
                              },
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
                              {
                                   title: "정보의 투명성",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "down"
                              },
                              {
                                   title: "이사회의 구성과 활동",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
                              {
                                   title: "이사의 보수",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "-"
                              },
                              {
                                   title: "관계사 위험",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
                              {
                                   title: "지속가능경영",
                                   ratio: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }).toString(),
                                   scoreComparison: faker.datatype.number({ min: -100, max: 100, precision: 0.01 }).toString(),
                                   postion: faker.datatype.number({ min: -20, max: 20, precision: 0.01 }).toString(),
                                   icon: "up"
                              },
     
                         ],
                    }
               },
               comment: {
                    controversy: faker.lorem.sentence(),
                    analyst: faker.lorem.sentence(),
                    // governance: faker.lorem.sentence(),
                    // environment: faker.lorem.sentence(),
                    // social: faker.lorem.sentence(),
               },
               segmentEvaluation: {
                    E: {
                         board: {
                              scoreTable: {
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   compare:faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   icon: "up"
                              },
                              grade: "aa",
                              totalRank: {
                                   rank: "77/150",
                                   ratioPosition: faker.datatype.number({ min: 0, max: 100}).toString(),
                              }
                         },
                         scoreChange: [
                              {
                                   evaluationYear: "2019상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2020상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2021상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2022상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              }
                         ],
                         categoryChart: [
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "이사의 보수",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                         ],
                         analyst: {
                              profile:faker.lorem.sentence(),
                              performance:faker.lorem.sentence(),
                         },
                         categoryScore: [
                              {
                                   title: "혁신활동",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {    
                                             ctCd: "E01",
                                             kpiCd: "E0101",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "E01",
                                             kpiCd: "E0101",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "E01",
                                             kpiCd: "E0101",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                              {
                                   title: "생산공정",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "E02",
                                             kpiCd: "E0201",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "E02",
                                             kpiCd: "E0201",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "E02",
                                             kpiCd: "E0201",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                              {
                                   title: "공급망관리",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "E03",
                                             kpiCd: "E0301",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "E03",
                                             kpiCd: "E0301",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "E03",
                                             kpiCd: "E0301",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                         ],
                         environmentData: {
                              energy: [
                                   {
                                        year: "2019",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2020",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2021",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   }
                              ],
                              energyTop5: [
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                              ],
                              water: [
                                   {
                                        year: "2019",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2020",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2021",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   }
                              ],
                              waterTop5: [
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                              ],
                              chemical: [
                                   {
                                        year: "2019",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2020",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2021",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   }
                              ],
                              chemicalTop5: [
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                              ],
                              airPollution: [
                                   {
                                        year: "2019",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2020",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2021",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   }
                              ],
                              airPollutionTop5: [
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                              ],
                              waste: [
                                   {
                                        year: "2019",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2020",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2021",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   }
                              ],
                              wasteTop5: [
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                              ],
                              greenGas: [
                                   {
                                        year: "2019",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2020",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2021",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   }
                              ],
                              greenGasLine: [
                                   {
                                        year: "2019",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2020",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   },
                                   {
                                        year: "2021",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                        unit: faker.datatype.string(3),
                                   }
                              ],
                              greenGasTop5: [
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                                   {
                                        title: faker.company.name() + "(" + faker.datatype.number({ max: 9999 }).toString() + ")",
                                        value: faker.datatype.number({ max: 9999 }).toString(),
                                   },
                              ]
                         }
                    },
                    S: {
                         board: {
                              scoreTable: {
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   compare:faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   icon: "down"
                              },
                              grade: "bb",
                              totalRank: {
                                   rank: "77/150",
                                   ratioPosition: faker.datatype.number({ min: 0, max: 100}).toString(),
                              }
                         },
                         scoreChange: [
                              {
                                   evaluationYear: "2019상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2020상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2021상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2022상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              }
                         ],
                         categoryChart: [
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "정보의 투명성",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "이사회의 구성과 활동",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "이사의 보수",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "관계사 위험",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "지속가능경영 인프라",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                         ],
                         analyst: {
                              profile:faker.lorem.sentence(),
                              performance:faker.lorem.sentence(),
                         },
                         categoryScore: [
                              {
                                   title: "혁신활동",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "S01",
                                             kpiCd: "S0101",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S01",
                                             kpiCd: "S0101",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S01",
                                             kpiCd: "S0101",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                              {
                                   title: "생산공정",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                              {
                                   title: "공급망관리",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                         ],
                         socialData: {
                              salaryPerPerson: {
                                   value: faker.datatype.number({ max: 9999 }).toString(),
                                   avg: faker.datatype.number({ max: 9999 }).toString()
                              },
                              maleFemaleRatio: {
                                   value: faker.datatype.number({ max: 9999 }).toString(),
                                   avg: faker.datatype.number({ max: 9999 }).toString()
                              },
                              welfareBenefits: {
                                   value: faker.datatype.number({ max: 9999 }).toString(),
                                   avg: faker.datatype.number({ max: 9999 }).toString()
                              },
                              averageTenure: {
                                   value: faker.datatype.number({ max: 9999 }).toString(),
                                   avg: faker.datatype.number({ max: 9999 }).toString()
                              }
                         }
     
                    },
                    G: {
                         board: {
                              scoreTable: {
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   compare:faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   icon: "up",
                              },
                              grade: "e",
                              totalRank: {
                                   rank: "77/150",
                                   ratioPosition: faker.datatype.number({ min: 0, max: 100}).toString(),
                              }
                         },
                         scoreChange: [
                              {
                                   evaluationYear: "2019상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2020상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2021상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   evaluationYear: "2022상반기",
                                   average: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   value: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   max: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   min: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              }
                         ],
                         categoryChart: [
                              {
                                   title: "주주의 권리",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "정보의 투명성",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "이사회의 구성과 활동",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "이사의 보수",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "관계사 위험",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: "평가제외",
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                              {
                                   title: "지속가능경영 인프라",
                                   ratio: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avgValue: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                              },
                         ],
                         comment: faker.lorem.sentence(),
                         analyst: {
                              profile:faker.lorem.sentence(),
                              performance:faker.lorem.sentence(),
                         },
                         categoryScore: [
                              {
                                   title: "혁신활동",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                              {
                                   title: "생산공정",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                              {
                                   title: "공급망관리",
                                   weight: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                   avg: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toString(),
                                   //서브타이틀 스토리보드 상 하늘색 부분
                                   children: [
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량2",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                        {
                                             ctCd: "S02",
                                             kpiCd: "S0201",
                                             subTitle: "친환경 혁신 역량3",
                                             weight: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             score: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             avg: faker.datatype.number({ min: 0, max: 100, precision: 0.1 }).toString(),
                                             children: [
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                       faker.lorem.sentence(),
                                                  ]
                                        },
                                   ]
                              },
                         ],
                         tsrData: [
                              ["2019", "18"],
                              ["2020", "50"],
                              ["2021", "-30"],
                         ],
                         //배당 테이블
                         allocation: [
                              {
                                   year: "2020",
                                   b: faker.datatype.number({ max: 9999 }).toString(),
                                   a: faker.datatype.number({ max: 9999 }).toString(),
                                   c: faker.datatype.number({ max: 9999 }).toString(),
                                   d: faker.datatype.number({ max: 9999 }).toString(),
                                   e: faker.datatype.number({ max: 9999 }).toString(),
                                   f: faker.datatype.number({ max: 9999 }).toString(),
                                   g: faker.datatype.number({ max: 9999 }).toString(),
                                   h: faker.datatype.number({ max: 9999 }).toString(),
                                   i: faker.datatype.number({ max: 9999 }).toString(),
                                   j: faker.datatype.number({ max: 9999 }).toString(),
                                   k: faker.datatype.number({ max: 9999 }).toString(),
                                   l: faker.datatype.number({ max: 9999 }).toString(),
                                   m: faker.datatype.number({ max: 9999 }).toString(),
                                   n: faker.datatype.number({ max: 9999 }).toString(),
                              },
                              {
                                   year: "2021",
                                   a: faker.datatype.number({ max: 9999 }).toString(),
                                   b: faker.datatype.number({ max: 9999 }).toString(),
                                   c: faker.datatype.number({ max: 9999 }).toString(),
                                   d: faker.datatype.number({ max: 9999 }).toString(),
                                   e: faker.datatype.number({ max: 9999 }).toString(),
                                   f: faker.datatype.number({ max: 9999 }).toString(),
                                   g: faker.datatype.number({ max: 9999 }).toString(),
                                   h: faker.datatype.number({ max: 9999 }).toString(),
                                   i: faker.datatype.number({ max: 9999 }).toString(),
                                   j: faker.datatype.number({ max: 9999 }).toString(),
                                   k: faker.datatype.number({ max: 9999 }).toString(),
                                   l: faker.datatype.number({ max: 9999 }).toString(),
                                   m: faker.datatype.number({ max: 9999 }).toString(),
                                   n: faker.datatype.number({ max: 9999 }).toString(),
                              },
                              {
                                   year: "2022",
                                   a: faker.datatype.number({ max: 9999 }).toString(),
                                   b: faker.datatype.number({ max: 9999 }).toString(),
                                   c: faker.datatype.number({ max: 9999 }).toString(),
                                   d: faker.datatype.number({ max: 9999 }).toString(),
                                   e: faker.datatype.number({ max: 9999 }).toString(),
                                   f: faker.datatype.number({ max: 9999 }).toString(),
                                   g: faker.datatype.number({ max: 9999 }).toString(),
                                   h: faker.datatype.number({ max: 9999 }).toString(),
                                   i: faker.datatype.number({ max: 9999 }).toString(),
                                   j: faker.datatype.number({ max: 9999 }).toString(),
                                   k: faker.datatype.number({ max: 9999 }).toString(),
                                   l: faker.datatype.number({ max: 9999 }).toString(),
                                   m: faker.datatype.number({ max: 9999 }).toString(),
                                   n: faker.datatype.number({ max: 9999 }).toString(),
                              }
                         ],
                         allocationComment: faker.lorem.sentence(),
                         //주식 소각 여부
                         incineration: [
                              {
                                   a: faker.datatype.string(5),
                                   b: faker.datatype.string(5),
                                   c: faker.datatype.string(5),
                                   d: faker.datatype.string(5),
                                   e: faker.datatype.string(5),
                                   f: faker.datatype.string(5)
                              },
                              {
                                   a: faker.datatype.string(5),
                                   b: faker.datatype.string(5),
                                   c: faker.datatype.string(5),
                                   d: faker.datatype.string(5),
                                   e: faker.datatype.string(5),
                                   f: faker.datatype.string(5)
                              },
                              {
                                   a: faker.datatype.string(5),
                                   b: faker.datatype.string(5),
                                   c: faker.datatype.string(5),
                                   d: faker.datatype.string(5),
                                   e: faker.datatype.string(5),
                                   f: faker.datatype.string(5)
                              }
                         ],
                         //이사회 명단
                         council: [
                              {
                                   name: faker.internet.userName(),
                                   division: faker.name.jobType(),
                                   sex: faker.name.gender(),
                                   appointmentDate: faker.datatype.datetime(),
                                   expirationDate: faker.datatype.datetime(),
                              },
                              {
                                   name: faker.internet.userName(),
                                   division: faker.name.jobType(),
                                   sex: faker.name.gender(),
                                   appointmentDate: faker.datatype.datetime(),
                                   expirationDate: faker.datatype.datetime(),
                              },
                              {
                                   name: faker.internet.userName(),
                                   division: faker.name.jobType(),
                                   sex: faker.name.gender(),
                                   appointmentDate: faker.datatype.datetime(),
                                   expirationDate: faker.datatype.datetime(),
                              }
                         ],
                         //이사 직위 및 전문성
                         councilProfessional: [
                              {
                                   name: faker.internet.userName(),
                                   division: faker.name.jobType(),
                                   position: faker.name.jobTitle(),
                                   specializedField: faker.name.jobArea(),
                                   concurrent: faker.company.name()
                              },
                              {
                                   name: faker.internet.userName(),
                                   division: faker.name.jobType(),
                                   position: faker.name.jobTitle(),
                                   specializedField: faker.name.jobArea(),
                                   concurrent: faker.company.name()
                              },
                              {
                                   name: faker.internet.userName(),
                                   division: faker.name.jobType(),
                                   position: faker.name.jobTitle(),
                                   specializedField: faker.name.jobArea(),
                                   concurrent: faker.company.name()
                              }
                         ],
                         // 감사위원 명단
                         auditMemberList: [
                              {
                                   name: faker.internet.userName(),
                                   position: faker.name.jobTitle(),
                                   outsideDirector: "사외이사",
                                   appointmentDate: faker.datatype.datetime(),
                                   expirationDate: faker.datatype.datetime(),
                                   etc: "-"
                              },
                              {
                                   name: faker.internet.userName(),
                                   position: faker.name.jobTitle(),
                                   outsideDirector: "사외이사",
                                   appointmentDate: faker.datatype.datetime(),
                                   expirationDate: faker.datatype.datetime(),
                                   etc: "-"
                              },
                              {
                                   name: faker.internet.userName(),
                                   position: faker.name.jobTitle(),
                                   outsideDirector: "사외이사",
                                   appointmentDate: faker.datatype.datetime(),
                                   expirationDate: faker.datatype.datetime(),
                                   etc: "-"
                              }
                         ],
                         yearComment: "2020",
                         executiveComparison: [
                              {
                                   year: "2020",
                                   executiveAverageWage: faker.datatype.number(99999).toString(),
                                   roa: faker.datatype.number(99999).toString(),
                                   dividend: faker.datatype.number(99999).toString(),
                                   averageWage: faker.datatype.number(99999).toString(),
                              },
                              {
                                   year: "2021",
                                   executiveAverageWage: faker.datatype.number(99999).toString(),
                                   roa: faker.datatype.number(99999).toString(),
                                   dividend: faker.datatype.number(99999).toString(),
                                   averageWage: faker.datatype.number(99999).toString(),
                              }
                         ],
                         governanceCompliance: {
                              stock: [
                                   {
                                        index: 1,
                                        check: "O"
                                   },
                                   {
                                        index: 2,
                                        check: "O"
                                   },
                                   {
                                        index: 3,
                                        check: "O"
                                   },
                                   {
                                        index: 4,
                                        check: "X"
                                   }
                              ],
                              council: [
                                   {
                                        index: 1,
                                        check: "O"
                                   },
                                   {
                                        index: 2,
                                        check: "-"
                                   },
                                   {
                                        index: 3,
                                        check: "O"
                                   },
                                   {
                                        index: 4,
                                        check: "X"
                                   },
                                   {
                                        index: 5,
                                        check: "X"
                                   },
                                   {
                                        index: 6,
                                        check: "X"
                                   }
                              ],
                              audit: [
                                   {
                                        index: 1,
                                        check: "O"
                                   },
                                   {
                                        index: 2,
                                        check: "O"
                                   },
                                   {
                                        index: 3,
                                        check: "O"
                                   },
                                   {
                                        index: 4,
                                        check: "X"
                                   },
                                   {
                                        index: 5,
                                        check: "X"
                                   }
                              ]
                         }
                    }
               }
          }
     
     };
}


