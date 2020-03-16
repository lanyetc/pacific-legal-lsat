import React from "react";
import { Typography, Link, List, ListItem } from "@material-ui/core";
import { Result } from "../../../../data/context";
export default function QuestionRepo(props: any) {
    const { resultList, questionList } = props;
    console.log(questionList);
    return (
        <div className="repo-container">
            {resultList.map((result: Result, key: any) => {
                return (
                    <div className="repo-item" key={key}>

                        <div className="question-container">
                            <Typography variant="body2" component="p" className="title" gutterBottom>
                                {questionList[result.questionId].content}
                            </Typography>
                            <div className="option-container">
                                <span>You answered:</span>
                                <List>
                                    {result.optionIds.map((selectedOptionId: number, key: any) => {
                                        const optionLabel = questionList[result.questionId].options.find((option: any) => option.id === selectedOptionId).label;
                                        return (<ListItem key={key}>
                                            <div className="todo-item-bullet" />
                                            <span className="item-label" >{optionLabel}</span>
                                        </ListItem>)
                                    })}
                                </List>
                            </div>
                            {/* <Typography variant="body2" component="p" className="link" >
                                <Link>Change my answer</Link>
                            </Typography> */}
                        </div>
                        <div className="info-container">
                            <Typography variant="body2" component="p" className="title" gutterBottom>
                                {result.repo}
                            </Typography>
                            <Typography variant="body2" component="p" className="link" >
                                {/* <Link>Learn more</Link> */}
                            </Typography>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}
