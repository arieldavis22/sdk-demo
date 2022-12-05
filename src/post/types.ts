//declare is used to tell the compiler "this thing (usually a variable) exists already,
//and therefore can be referenced by other code, also there is no need to compile this statement into any JavaScript".
export declare type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export declare type NewPost = {
  title: string;
  body: string;
  userId: number;
};
