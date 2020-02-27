import { Item, Result } from './context';
export enum NodeTypes {
    single,
    multi,
    message
}

export enum TriggerType {
    next, // next message
    default, // default triggre without condition, should always be the last trigger
    skip, // skip to next sub-module
    exit // exit survey
}
export interface Option {
    id: number;
    label: string;
}
export interface Answer {
    questionId: number;
    optionId: number;
}
export interface Trigger {
    type: TriggerType,
    answers: Array<Answer>;
    response?: Array<string>;
    result?: Result;
    todos?: Array<Item>;
    nextQuestionId: number;
    nextModuleId?: number;
}
export interface ExtraInfo {
    title: string,
    content: string
}
export interface Node {
    id: number;
    type: NodeTypes;
    content: string;
    options: Array<Option>;
    triggers: Array<Trigger>;
    extraInfo?: ExtraInfo;
}

export interface NodeDictionary {
    [key: number]: Node;
}

export interface Module {
    name: string,
    modules?: { [key: number]: Module },
    nodes?: NodeDictionary
}

function createNode(_node: Node): { id: number, type: NodeTypes, content: string, options: Array<Option>, triggers: Array<Trigger>, extraInfo?: ExtraInfo } {
    let newNode: Node;
    newNode = {
        id: _node.id,
        type: _node.type,
        content: _node.content,
        options: _node.options,
        triggers: _node.triggers
    }
    if (_node.extraInfo) {
        newNode.extraInfo = _node.extraInfo;
    }
    return newNode;
}

// function createOption(_option: Option): { id: number, label: string } {
//     let newOption: Option;
//     newOption = {
//         id: _option.id,
//         label: _option.label
//     }
//     return newOption;
// }
// function createAnswer(_answer: Answer): { questionId: number, optionId: number } {
//     let newAnswer: Answer;
//     newAnswer = {
//         questionId: _answer.questionId,
//         optionId: _answer.optionId
//     }
//     return newAnswer;
// }
// function createTrigger(_trigger: Trigger): { type: TriggerType, answers: Array<Answer>, nextQuestionId: number, result?: Result, response?: Array<string>, todos?: Array<Item>, nextModuleId?: number } {
//     let newTrigger: Trigger;
//     newTrigger = {
//         type: _trigger.type,
//         answers: _trigger.answers,
//         result: _trigger.result,
//         nextQuestionId: _trigger.nextQuestionId
//     }
//     if (_trigger.response) {
//         newTrigger.response = _trigger.response;
//     }
//     if (_trigger.nextModuleId) {
//         newTrigger.nextModuleId = _trigger.nextModuleId;
//     }
//     return newTrigger;
// }

// function testing() {
//     let survey: NodeDictionary = {};
//     let options: Array<Option> = [];
//     options.push(createOption({id:100, label: "Yes"}));
//     options.push(createOption({id:101, label: "No"}));
//     let triggers: Array<Trigger> = [];
//     let answers: Array<Answer> = [];
//     answers = [{questionId: 1, optionId: 100}];
//     triggers.push(createTrigger({answers: answers, results: ["some repo on quetion1 Yes"], nextQuestionId: 2}));
//     answers = [{questionId: 1, optionId: 101}];
//     triggers.push(createTrigger({answers: answers, results: ["some repo on question1 No"], nextQuestionId: 3}));
//     let extraInfo = [ "What is privacy?","Do I need a privacy policy?","What should a privacy policy contain?"];
//     survey[1] = createNode({id: 1, type: NodeTypes.single, content: "Does your org have a privacy policy?", options: options, triggers: triggers, extraInfo: extraInfo});
//     console.log(survey);
// }
function getSurvey() {
    let survey: NodeDictionary = {};
    survey[1] = createNode(
        {
            id: 1,
            type: NodeTypes.single,
            content: "Does your org have a privacy policy?",
            options: [
                {
                    id: 101,
                    label: "Yes"
                },
                {
                    id: 100,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 1, optionId: 101 }
                    ],
                    result: { questionId: 1, optionId: 101, repo: "some repo on quetion 1 Yes" },
                    nextQuestionId: 3
                },
                {
                    type: TriggerType.skip,
                    answers: [
                        { questionId: 1, optionId: 100 }
                    ],
                    result: { questionId: 1, optionId: 100, repo: "some repo on quetion 1 No" },
                    todos: [{ title: "Todo Item 1" }],
                    nextQuestionId: 2,
                    nextModuleId: 2
                }
            ],
            extraInfo: {
                title: "What is a privacy policy?",
                content: "A privacy policy is a document which describes whose personal information we are collecting: " +
                    "why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."
            }
        }
    );
    // questionId = 2 belongs to another submodule, so it's not included in here
    survey[3] = createNode(
        {
            id: 3,
            type: NodeTypes.single,
            content: "Who is covered in your privacy policy?",
            options: [
                {
                    id: 300,
                    label: "All"
                },
                {
                    id: 301,
                    label: "Not All"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 3, optionId: 300 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 3, optionId: 300, repo: "some repo on quetion 3 No" },
                    nextQuestionId: 4
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 3, optionId: 301 }
                    ],
                    result: { questionId: 3, optionId: 301, repo: "some repo on quetion 3 Yes" },
                    todos: [{ title: "Todo Item 2" }],
                    nextQuestionId: 4
                }
            ]
        }
    );
    survey[4] = createNode(
        {
            id: 4,
            type: NodeTypes.single,
            content: "Org operates website?",
            options: [
                {
                    id: 401,
                    label: "Yes"
                },
                {
                    id: 400,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 4, optionId: 401 }
                    ],
                    result: { questionId: 4, optionId: 401, repo: "some repo on quetion 4 Yes" },
                    nextQuestionId: 6
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 4, optionId: 400 }
                    ],
                    result: { questionId: 4, optionId: 400, repo: "some repo on quetion 4 No" },
                    nextQuestionId: 5
                }
            ]
        }
    );
    survey[5] = createNode(
        {
            id: 5,
            type: NodeTypes.single,
            content: "Org uses social media?",
            options: [
                {
                    id: 501,
                    label: "Yes"
                },
                {
                    id: 500,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 5, optionId: 501 }
                    ],
                    result: { questionId: 5, optionId: 501, repo: "some repo on quetion 5 Yes" },
                    nextQuestionId: 8
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 5, optionId: 500 }
                    ],
                    result: { questionId: 5, optionId: 500, repo: "some repo on quetion 5 No" },
                    nextQuestionId: 7
                }
            ]
        }
    );
    survey[6] = createNode(
        {
            id: 6,
            type: NodeTypes.single,
            content: "Collect data for analytics?",
            options: [
                {
                    id: 601,
                    label: "Yes"
                },
                {
                    id: 600,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 6, optionId: 601 }
                    ],
                    result: { questionId: 6, optionId: 601, repo: "some repo on quetion 6 Yes" },
                    nextQuestionId: 9
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 6, optionId: 600 }
                    ],
                    result: { questionId: 6, optionId: 600, repo: "some repo on quetion 6 No" },
                    nextQuestionId: 5
                }
            ],
            extraInfo: {
                title: "WHAT ARE DATA ANALYTICS?",
                content: "Data analytics refers to tracking website usage for reporting and evaluating purposes. " +
                    "Google Analytics is a common example of a data analytics service."
            }
        }
    );
    survey[7] = createNode(
        {
            id: 7,
            type: NodeTypes.single,
            content: "List of people trained on privacy policy?",
            options: [
                {
                    id: 701,
                    label: "Yes"
                },
                {
                    id: 700,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.skip,
                    answers: [
                        { questionId: 7, optionId: 701 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 7, optionId: 701, repo: "some repo on quetion 7 Yes" },
                    nextQuestionId: 2
                },
                {
                    type: TriggerType.skip,
                    answers: [
                        { questionId: 7, optionId: 700 }
                    ],
                    result: { questionId: 7, optionId: 700, repo: "some repo on quetion 7 No" },
                    todos: [{ title: "Todo Item 5" }],
                    nextQuestionId: 2
                }
            ]
        }
    );
    survey[8] = createNode(
        {
            id: 8,
            type: NodeTypes.single,
            content: "Reviewed social media terms?",
            options: [
                {
                    id: 801,
                    label: "Yes"
                },
                {
                    id: 800,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 8, optionId: 801 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 8, optionId: 801, repo: "some repo on quetion 8 Yes" },
                    nextQuestionId: 7
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 8, optionId: 800 }
                    ],
                    result: { questionId: 8, optionId: 800, repo: "some repo on quetion 8 No" },
                    todos: [{ title: "Todo Item 4" }],
                    nextQuestionId: 7
                }
            ],
            extraInfo: {
                title: "WHAT IS THIS?",
                content: "Terms and conditions are the agreement between a service and the service user. " +
                    "This is the legal text that we agree to before using a service and it can often be " +
                    "accessed by a link on the bottom of a website or within the settings."
            }
        }
    );
    survey[9] = createNode(
        {
            id: 9,
            type: NodeTypes.single,
            content: "Does your privacy policy describe the collection of analytics?",
            options: [
                {
                    id: 901,
                    label: "Yes"
                },
                {
                    id: 900,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 9, optionId: 901 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 9, optionId: 901, repo: "some repo on quetion 9 Yes" },
                    nextQuestionId: 5
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 9, optionId: 900 }
                    ],
                    result: { questionId: 9, optionId: 900, repo: "some repo on quetion 9 No" },
                    todos: [{ title: "Todo Item 3" }],
                    nextQuestionId: 5
                }
            ]
        }
    );



    return survey;
}

function getSurvey_part1() {
    let survey: NodeDictionary = {};
    survey[1] = createNode(
        {
            id: 1,
            type: NodeTypes.single,
            content: "Does your org have a privacy policy?",
            options: [
                {
                    id: 101,
                    label: "Yes"
                },
                {
                    id: 100,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 1, optionId: 101 }
                    ],
                    result: { questionId: 1, optionId: 101, repo: "some repo on quetion 1 Yes" },
                    nextQuestionId: 3
                },
                {
                    type: TriggerType.skip,
                    answers: [
                        { questionId: 1, optionId: 100 }
                    ],
                    result: { questionId: 1, optionId: 100, repo: "some repo on quetion 1 No" },
                    todos: [{ title: "Todo Item 1" }],
                    nextQuestionId: 2,
                    nextModuleId: 2
                }
            ],
            extraInfo: {
                title: "What is a privacy policy?",
                content: "A privacy policy is a document which describes whose personal information we are collecting: " +
                    "why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."
            }
        }
    );
    // questionId = 2 belongs to another submodule, so it's not included in here
    survey[3] = createNode(
        {
            id: 3,
            type: NodeTypes.single,
            content: "Who is covered in your privacy policy?",
            options: [
                {
                    id: 300,
                    label: "All"
                },
                {
                    id: 301,
                    label: "Not All"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 3, optionId: 300 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 3, optionId: 300, repo: "some repo on quetion 3 No" },
                    nextQuestionId: 4
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 3, optionId: 301 }
                    ],
                    result: { questionId: 3, optionId: 301, repo: "some repo on quetion 3 Yes" },
                    todos: [{ title: "Todo Item 2" }],
                    nextQuestionId: 4
                }
            ]
        }
    );
    survey[4] = createNode(
        {
            id: 4,
            type: NodeTypes.single,
            content: "Org operates website?",
            options: [
                {
                    id: 401,
                    label: "Yes"
                },
                {
                    id: 400,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 4, optionId: 401 }
                    ],
                    result: { questionId: 4, optionId: 401, repo: "some repo on quetion 4 Yes" },
                    nextQuestionId: 6
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 4, optionId: 400 }
                    ],
                    result: { questionId: 4, optionId: 400, repo: "some repo on quetion 4 No" },
                    nextQuestionId: 5
                }
            ]
        }
    );
    survey[5] = createNode(
        {
            id: 5,
            type: NodeTypes.single,
            content: "Org uses social media?",
            options: [
                {
                    id: 501,
                    label: "Yes"
                },
                {
                    id: 500,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 5, optionId: 501 }
                    ],
                    result: { questionId: 5, optionId: 501, repo: "some repo on quetion 5 Yes" },
                    nextQuestionId: 8
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 5, optionId: 500 }
                    ],
                    result: { questionId: 5, optionId: 500, repo: "some repo on quetion 5 No" },
                    nextQuestionId: 7
                }
            ]
        }
    );
    survey[6] = createNode(
        {
            id: 6,
            type: NodeTypes.single,
            content: "Collect data for analytics?",
            options: [
                {
                    id: 601,
                    label: "Yes"
                },
                {
                    id: 600,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 6, optionId: 601 }
                    ],
                    result: { questionId: 6, optionId: 601, repo: "some repo on quetion 6 Yes" },
                    nextQuestionId: 9
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 6, optionId: 600 }
                    ],
                    result: { questionId: 6, optionId: 600, repo: "some repo on quetion 6 No" },
                    nextQuestionId: 5
                }
            ],
            extraInfo: {
                title: "WHAT ARE DATA ANALYTICS?",
                content: "Data analytics refers to tracking website usage for reporting and evaluating purposes. " +
                    "Google Analytics is a common example of a data analytics service."
            }
        }
    );
    survey[7] = createNode(
        {
            id: 7,
            type: NodeTypes.single,
            content: "List of people trained on privacy policy?",
            options: [
                {
                    id: 701,
                    label: "Yes"
                },
                {
                    id: 700,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.skip,
                    answers: [
                        { questionId: 7, optionId: 701 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 7, optionId: 701, repo: "some repo on quetion 7 Yes" },
                    nextQuestionId: 2
                },
                {
                    type: TriggerType.skip,
                    answers: [
                        { questionId: 7, optionId: 700 }
                    ],
                    result: { questionId: 7, optionId: 700, repo: "some repo on quetion 7 No" },
                    todos: [{ title: "Todo Item 5" }],
                    nextQuestionId: 2
                }
            ]
        }
    );
    survey[8] = createNode(
        {
            id: 8,
            type: NodeTypes.single,
            content: "Reviewed social media terms?",
            options: [
                {
                    id: 801,
                    label: "Yes"
                },
                {
                    id: 800,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 8, optionId: 801 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 8, optionId: 801, repo: "some repo on quetion 8 Yes" },
                    nextQuestionId: 7
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 8, optionId: 800 }
                    ],
                    result: { questionId: 8, optionId: 800, repo: "some repo on quetion 8 No" },
                    todos: [{ title: "Todo Item 4" }],
                    nextQuestionId: 7
                }
            ],
            extraInfo: {
                title: "WHAT IS THIS?",
                content: "Terms and conditions are the agreement between a service and the service user. " +
                    "This is the legal text that we agree to before using a service and it can often be " +
                    "accessed by a link on the bottom of a website or within the settings."
            }
        }
    );
    survey[9] = createNode(
        {
            id: 9,
            type: NodeTypes.single,
            content: "Does your privacy policy describe the collection of analytics?",
            options: [
                {
                    id: 901,
                    label: "Yes"
                },
                {
                    id: 900,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 9, optionId: 901 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 9, optionId: 901, repo: "some repo on quetion 9 Yes" },
                    nextQuestionId: 5
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 9, optionId: 900 }
                    ],
                    result: { questionId: 9, optionId: 900, repo: "some repo on quetion 9 No" },
                    todos: [{ title: "Todo Item 3" }],
                    nextQuestionId: 5
                }
            ]
        }
    );



    return survey;
}

function getSurvey_part2() {
    let survey: NodeDictionary = {};
    survey[2] = createNode(
        {
            id: 2,
            type: NodeTypes.message,
            content: "Explain what is personal info and what isn’t",
            options: [],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [],
                    nextQuestionId: 10
                }
            ]
        }
    );
    survey[10] = createNode(
        {
            id: 10,
            type: NodeTypes.single,
            content: "Does your org collect personal information?",
            options: [
                {
                    id: 1001,
                    label: "Yes"
                },
                {
                    id: 1000,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 10, optionId: 1001 }
                    ],
                    result: { questionId: 10, optionId: 1001, repo: "some repo on question 10 Yes" },
                    nextQuestionId: 12
                },
                {
                    type: TriggerType.skip,
                    answers: [
                        { questionId: 10, optionId: 1000 }
                    ],
                    result: { questionId: 10, optionId: 1000, repo: "some repo on question 10 No" },
                    nextQuestionId: 11
                }
            ]
        }
    )
    survey[12] = createNode(
        {
            id: 12,
            type: NodeTypes.single,
            content: "Do you explain what the P.I. will be used for?",
            options: [
                {
                    id: 1201,
                    label: "Yes"
                },
                {
                    id: 1200,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 12, optionId: 1201 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 12, optionId: 1201, repo: "some repo on question 12 Yes" },
                    nextQuestionId: 13
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 12, optionId: 1200 }
                    ],
                    todos: [{ title: "Todo Item 6" }],
                    result: { questionId: 12, optionId: 1200, repo: "some repo on question 12 No" },
                    nextQuestionId: 13
                }
            ]
        }
    )
    survey[13] = createNode(
        {
            id: 13,
            type: NodeTypes.single,
            content: "Do you obtain consent from the person?",
            options: [
                {
                    id: 1301,
                    label: "Yes"
                },
                {
                    id: 1300,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 13, optionId: 1301 }
                    ],
                    result: { questionId: 13, optionId: 1301, repo: "some repo on question 13 Yes" },
                    nextQuestionId: 15
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 13, optionId: 1300 }
                    ],
                    result: { questionId: 13, optionId: 1300, repo: "some repo on question 13 No" },
                    nextQuestionId: 14
                }
            ]
        }
    )
    survey[14] = createNode(
        {
            id: 14,
            type: NodeTypes.multi,
            content: "Our information is collected .. Select all that apply.",
            options: [
                {
                    id: 1401,
                    label: "Yes"
                },
                {
                    id: 1400,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 14, optionId: 1401 }
                    ],
                    result: { questionId: 14, optionId: 1401, repo: "some repo on question 14 Yes" },
                    nextQuestionId: 17
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 14, optionId: 1400 }
                    ],
                    result: { questionId: 14, optionId: 1400, repo: "some repo on question 14 No" },
                    nextQuestionId: 16
                }
            ]
        }
    )
    survey[15] = createNode(
        {
            id: 15,
            type: NodeTypes.multi,
            content: "Do you use a consent form?",
            options: [
                {
                    id: 1501,
                    label: "Yes"
                },
                {
                    id: 1500,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 15, optionId: 1501 }
                    ],
                    response: ["Good Job."],
                    result: { questionId: 15, optionId: 1501, repo: "some repo on question 15 Yes" },
                    nextQuestionId: 14
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 15, optionId: 1500 }
                    ],
                    todos: [{ title: "Todo Item 7" }],
                    result: { questionId: 15, optionId: 1500, repo: "some repo on question 15 No" },
                    nextQuestionId: 16
                }
            ]
        }
    )
    survey[16] = createNode(
        {
            id: 16,
            type: NodeTypes.single,
            content: "Is the person an employee of the org?",
            options: [
                {
                    id: 1601,
                    label: "Yes"
                },
                {
                    id: 1600,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 16, optionId: 1601 }
                    ],
                    result: { questionId: 16, optionId: 1601, repo: "some repo on question 16 Yes" },
                    nextQuestionId: 18
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 16, optionId: 1600 }
                    ],
                    result: { questionId: 16, optionId: 1600, repo: "some repo on question 16 No" },
                    todos: [{ title: "Todo Item 8" }],
                    nextQuestionId: 17
                }
            ]
        }
    )
    survey[17] = createNode(
        {
            id: 17,
            type: NodeTypes.single,
            content: "Does the P.I you collect help fufill the orgs mission/purpose?",
            options: [
                {
                    id: 1701,
                    label: "Yes"
                },
                {
                    id: 1700,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 17, optionId: 1701 }
                    ],
                    result: { questionId: 17, optionId: 1701, repo: "some repo on question 17 Yes" },
                    nextQuestionId: 20
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 17, optionId: 1700 }
                    ],
                    result: { questionId: 17, optionId: 1700, repo: "some repo on question 17 No" },
                    nextQuestionId: 66
                }
            ],
            extraInfo: {
                title: "I NEED MORE INFORMATION",
                content: "Information collected should be related to the society’s purpose/goals. " +
                    "For example, “we are a theatre company and collect information from our subscribers to sell tickets.”"
            },
        }
    )
    survey[18] = createNode(
        {
            id: 18,
            type: NodeTypes.single,
            content: "Select reasons for collecting employee information. Select one.",
            options: [
                {
                    id: 1800,
                    label: "Establish employment"
                },
                {
                    id: 1801,
                    label: "Manage employment"
                },
                {
                    id: 1802,
                    label: "Terminate employment"
                },
                {
                    id: 1803,
                    label: "Other reasons"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 18, optionId: 1803 }
                    ],
                    result: { questionId: 18, optionId: 1803, repo: "some repo on question 18 other reasons" },
                    todos: [{ title: "Todo Item 8" }],
                    nextQuestionId: 17
                },
                {
                    type: TriggerType.default,
                    answers: [],
                    result: { questionId: 18, optionId: 1800, repo: "some repo on question 18" },
                    nextQuestionId: 19
                }
            ]
        }
    )
    survey[19] = createNode(
        {
            id: 19,
            type: NodeTypes.single,
            content: "Do you let these employees know ahead of time?",
            options: [
                {
                    id: 1901,
                    label: "Yes"
                },
                {
                    id: 1900,
                    label: "No"
                }
            ],
            triggers: [
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 19, optionId: 1900 }
                    ],
                    result: { questionId: 19, optionId: 1900, repo: "some repo on question 19 N0" },
                    todos: [{ title: "Todo Item 9" }],
                    nextQuestionId: 17
                },
                {
                    type: TriggerType.next,
                    answers: [
                        { questionId: 19, optionId: 1901 }
                    ],
                    response: ["Good Job"],
                    result: { questionId: 18, optionId: 1800, repo: "some repo on question 19 Yes" },
                    nextQuestionId: 17
                }
            ]
        }
    )

    survey[66] = createNode(
        {
            id: 66,
            type: NodeTypes.single,
            content: "You completed module",
            options: [
                {
                    id: 6600,
                    label: "Go to the results"
                }
            ],
            triggers: [
                {
                    type: TriggerType.exit,
                    answers: [
                        { questionId: 66, optionId: 6600 }
                    ],
                    nextQuestionId: -1
                }
            ]
        }
    )

    return survey;
}

function getModules() {
    let modules: { [key: number]: Module } = {};
    modules[1] = { name: "Privacy Policy", nodes: getSurvey_part1() };
    modules[2] = { name: "Personal Info", nodes: getSurvey_part2() };
    return modules;
}


export {
    getSurvey,
    getModules
}