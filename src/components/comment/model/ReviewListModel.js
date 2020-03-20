class ReviewListModel{

    starCount='';
    option='';
    content='';
    photo='';
    id='';
    writeDate='';
    recommendCount='';

    constructor(starCount, option, content, photo, id, writeDate, recommendCount){
        this.starCount = starCount;
        this.option = option;
        this.content = content;
        this.photo = photo;
        this.id = id;
        this.writeDate = writeDate;
        this.recommendCount = recommendCount;
    }
}

export default ReviewListModel;