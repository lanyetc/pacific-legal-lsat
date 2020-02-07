enum NodeTypes {
    single,
    multi,
    message
}
interface Option {
    id: number;
    label: string;
}
interface Answer {
    questionId: number;
    optionId: number;
}
interface Trigger {
    answers: Array<Answer>;
    response?: Array<string>;
    results: Array<string>;
    nextQuestionId: number;
}
interface Node {
    id: number;
    type: NodeTypes;
    content: string;
    options: Array<Option>;
    triggers: Array<Trigger>;
    extraInfo?: Array<string>;
}

interface NodeDictionary {
    [key: number]: Node;
}

function createNode(_node: Node): {id: number, type: NodeTypes, content: string, options: Array<Option>, triggers: Array<Trigger>, extraInfo?:Array<string>} {
    let newNode: Node;
    newNode = {
        id: _node.id,
        type: _node.type,
        content: _node.content,
        options: _node.options,
        triggers: _node.triggers
    }
    if(_node.extraInfo) {
        newNode.extraInfo = _node.extraInfo;
    }
    return newNode;
}

function createOption(_option: Option): {id: number, label: string} {
    let newOption: Option;
    newOption = {
        id: _option.id,
        label: _option.label
    }
    return newOption;
}
function createAnswer(_answer: Answer): {questionId: number, optionId: number} {
    let newAnswer: Answer;
    newAnswer = {
        questionId: _answer.questionId,
        optionId: _answer.optionId
    }
    return newAnswer;
}
function createTrigger(_trigger: Trigger): {answers: Array<Answer>, results: Array<string>, nextQuestionId: number, response?: Array<string>} {
    let newTrigger: Trigger;
    newTrigger = {
        answers: _trigger.answers,
        results: _trigger.results,
        nextQuestionId: _trigger.nextQuestionId
    }
    if(_trigger.response) {
        newTrigger.response = _trigger.response;
    }
    return newTrigger;
}

function testing() {
    let survey: NodeDictionary = {};
    let options: Array<Option> = [];
    options.push(createOption({id:100, label: "Yes"}));
    options.push(createOption({id:101, label: "No"}));
    let triggers: Array<Trigger> = [];
    let answers: Array<Answer> = [];
    answers = [{questionId: 1, optionId: 100}];
    triggers.push(createTrigger({answers: answers, results: ["some repo on quetion1 Yes"], nextQuestionId: 2}));
    answers = [{questionId: 1, optionId: 101}];
    triggers.push(createTrigger({answers: answers, results: ["some repo on question1 No"], nextQuestionId: 3}));
    let extraInfo = [ "What is privacy?","Do I need a privacy policy?","What should a privacy policy contain?"];
    survey[1] = createNode({id: 1, type: NodeTypes.single, content: "Does your org have a privacy policy?", options: options, triggers: triggers, extraInfo: extraInfo});
    console.log(survey);
}

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
                    answers: [
                        {questionId: 1, optionId: 101}
                    ],
                    results: ["some repo on quetion 1 Yes"],
                    nextQuestionId: 3
                },
                {
                    answers: [
                        {questionId: 1, optionId: 100}
                    ],
                    results: ["some repo on quetion 1 No"],
                    nextQuestionId: 2
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
                    answers: [
                        {questionId: 3, optionId: 300}
                    ],
                    response: [ "Good Job"],
                    results: ["some repo on quetion 3 All"],
                    nextQuestionId: 4
                },
                {
                    answers: [
                        {questionId: 3, optionId: 301}
                    ],
                    results: ["some repo on quetion 1 No"],
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
                    answers: [
                        {questionId: 4, optionId: 401}
                    ],
                    results: ["some repo on quetion 4 Yes"],
                    nextQuestionId: 6
                },
                {
                    answers: [
                        {questionId: 4, optionId: 400}
                    ],
                    results: ["some repo on quetion 4 No"],
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
                    answers: [
                        {questionId: 5, optionId: 501}
                    ],
                    results: ["some repo on quetion 5 Yes"],
                    nextQuestionId: 8
                },
                {
                    answers: [
                        {questionId: 5, optionId: 500}
                    ],
                    results: ["some repo on quetion 5 No"],
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
                    answers: [
                        {questionId: 6, optionId: 601}
                    ],
                    results: ["some repo on quetion 6 Yes"],
                    nextQuestionId: 9
                },
                {
                    answers: [
                        {questionId: 6, optionId: 600}
                    ],
                    results: ["some repo on quetion 6 No"],
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
                    answers: [
                        {questionId: 7, optionId: 701}
                    ],
                    response: ["Good Job"],
                    results: ["some repo on quetion 7 Yes"],
                    nextQuestionId: 2
                },
                {
                    answers: [
                        {questionId: 7, optionId: 700}
                    ],
                    results: ["some repo on quetion 7 No"],
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
                    answers: [
                        {questionId: 8, optionId: 801}
                    ],
                    response: ["Good Job"],
                    results: ["some repo on quetion 8 Yes"],
                    nextQuestionId: 7
                },
                {
                    answers: [
                        {questionId: 8, optionId: 800}
                    ],
                    results: ["some repo on quetion 8 No"],
                    nextQuestionId: 7
                }
            ],
            extraInfo: [ "Might need supporting info here"]
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
                    answers: [
                        {questionId: 9, optionId: 901}
                    ],
                    response: ["Good Job"],
                    results: ["some repo on quetion 9 Yes"],
                    nextQuestionId: 5
                },
                {
                    answers: [
                        {questionId: 9, optionId: 900}
                    ],
                    results: ["some repo on quetion 9 No"],
                    nextQuestionId: 5
                }
            ],
            extraInfo: [ "What does this look like?"]
        }
    );
    return survey;
}

export {
    getSurvey
}