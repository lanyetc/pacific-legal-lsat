import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
export default function QuestionRepo(props: any) {
    const {resultList} = props;
    return (
        <div className="container">
            {resultList}
      </div>
    );
}
