export class Quote {
    public upVote: true;
    showCompleteDate: boolean;
    constructor(public title: string, public body: string, public author: string, public completeDate: Date, public like: number,
      public dislike: number) {
      this.showCompleteDate = false;
    }
  

}
