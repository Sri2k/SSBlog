export class Comment {
    id!: number;
    postId!: number;
    parent_id!: null;
    user!: string;
    date!: string | null;
    content!: string;
  }
  