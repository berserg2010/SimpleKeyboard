type Layout = Array<Array<string>>;

type Layouts = {
  [key: string]: Layout;
};

type ActionButton = {
  [key: string]: (value: string) => string;
};
