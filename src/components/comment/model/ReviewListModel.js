class ReviewListModel{

    starCount='';
    option='';
    content='';
    photo='';
    id='';
    writeDate='';

    constructor(starCount, option, content, photo, id, writeDate){
        this.starCount = starCount;
        this.option = option;
        this.content = content;
        this.photo = photo;
        this.id = id;
        this.writeDate = writeDate;
    }
}

export default ReviewListModel;