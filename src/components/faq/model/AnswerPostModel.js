class AnswerPostModel {
    no = null;
    title = '';
    createdDate = '';
    answerDate = '';
    status = '';

    constructor(no, title, createdDate, answerDate, status) {
        this.no = no;
        this.title = title;
        this.createdDate = createdDate;
        this.answerDate = answerDate;
        this.status = status;
    }
}

export default AnswerPostModel;