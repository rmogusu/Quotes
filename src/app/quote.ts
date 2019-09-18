export class Quote {
    public upvote: true;
    showcompleteDate: boolean;
    constructor(public title: string, public body: string, public author: string, public completeDate: Date, public like: number,
      public dislike: number) {
      this.showcompleteDate = false;
    }
  

}
