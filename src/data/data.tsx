import { Item, Result } from './context';
export enum NodeTypes {
    single,
    multi,
    message
}

export enum TriggerType {
    next, // next message
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
export interface Node {
    id: number;
    type: NodeTypes;
    content: string;
    options: Array<Option>;
    triggers: Array<Trigger>;
    extraInfo?: Array<string>;
}

export interface NodeDictionary {
    [key: number]: Node;
}

export interface Module {
    name: string,
    modules?: { [key: number]: Module },
    nodes?: NodeDictionary
}

function createNode(_node: Node): { id: number, type: NodeTypes, content: string, options: Array<Option>, triggers: Array<Trigger>, extraInfo?: Array<string> } {
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

function createOption(_option: Option): { id: number, label: string } {
    let newOption: Option;
    newOption = {
        id: _option.id,
        label: _option.label
    }
    return newOption;
}
function createAnswer(_answer: Answer): { questionId: number, optionId: number } {
    let newAnswer: Answer;
    newAnswer = {
        questionId: _answer.questionId,
        optionId: _answer.optionId
    }
    return newAnswer;
}
function createTrigger(_trigger: Trigger): { type: TriggerType, answers: Array<Answer>, nextQuestionId: number, result?: Result, response?: Array<string>, todos?: Array<Item>, nextModuleId?: number } {
    let newTrigger: Trigger;
    newTrigger = {
        type: _trigger.type,
        answers: _trigger.answers,
        result: _trigger.result,
        nextQuestionId: _trigger.nextQuestionId
    }
    if (_trigger.response) {
        newTrigger.response = _trigger.response;
    }
    if( _trigger.nextModuleId) {
        newTrigger.nextModuleId = _trigger.nextModuleId;
    }
    return newTrigger;
}

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
            extraInfo: [
                "What is privacy?",
                "Do I need a privacy policy?",
                "What should a privacy policy contain?"
            ]
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
            extraInfo: ["Explain analytics"]
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
            extraInfo: ["Might need supporting info here"]
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
            ],
            extraInfo: ["What does this look like?"]
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
            extraInfo: [
                "What is privacy?",
                "Do I need a privacy policy?",
                "What should a privacy policy contain?"
            ]
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
            extraInfo: ["Explain analytics"]
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
            extraInfo: ["Might need supporting info here"]
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
            ],
            extraInfo: ["What does this look like?"]
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
                    id: 1000,
                    label: "No"
                },
                {
                    id: 1001,
                    label: "Yes"
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
                    todos: [{ title: "Todo Item 2" }],
                    nextQuestionId: 11
                }
            ]
        }
    )

    return survey;
}

function getModules() {
    let modules: { [key: number]: Module } = {};
    modules[1] = { name: "Privacy Policy", nodes: getSurvey_part1() };
    modules[2] = { name: "Personal Info", nodes: getSurvey_part2()};
    return modules;
}


export {
    getSurvey,
    getModules
}