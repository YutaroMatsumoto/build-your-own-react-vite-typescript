export function createElement(type: "input", props?: any, ...children: any) {
  // ...children => Restパラメータ
  return {
    type,
    props: {
      ...props, // ...props => spread演算子
      children,
    },
  };
}
