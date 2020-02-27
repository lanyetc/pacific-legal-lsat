import React from "react";
import { getSurvey } from '../../../../data/data';
import { Typography, Link } from "@material-ui/core";
import { Result } from "../../../../data/context";
export default function QuestionRepo(props: any) {
    const { resultList, questionList} = props;
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
                            <Typography variant="body2" component="p">
                                because you answered: {questionList[result.questionId].options.find((opt: { id: number; }) => opt.id === result.optionId)?.label}
                            </Typography>
                            <Typography variant="body2" component="p" className="link" >
                                <Link>Change my answer</Link>
                            </Typography>
                        </div>
                        <div className="info-container">
                            <Typography variant="body2" component="p" className="title" gutterBottom>
                                {result.repo}
                            </Typography>
                            <Typography variant="body2" component="p" className="link" >
                                <Link>Learn more</Link>
                            </Typography>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}
