import React from 'react';
import { render } from '@testing-library/react';
import {NodeFactory} from './NodeFactory'
import {NodeType, Node} from './Node'
import {ConditionMatchType} from './Condition'


test('Node Creation', () => {
    const node: Node = NodeFactory.createNodeFromData(
        {
            id: 1,
            type: NodeType.singleSelect,
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
                    action: { // fix this
                        type: "next",
                        nextQuestionId: 5
                    },
                    condition: {
                        type: ConditionMatchType.some,
                        options: [
                            {questionId: 1, optionId: 101}
                        ]
                    },
                },
            ],
            extraInfo: {
                title: "What is a privacy policy?",
                content: "A privacy policy is a document which describes whose personal information we are collecting: " +
                    "why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."
            }
        }
    );

    console.log(JSON.stringify(node));
});
