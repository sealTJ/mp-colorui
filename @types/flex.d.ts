import { ComponentClass } from 'react';

export interface IProps {
  /**
   * 水平方向排列方式
   *
   * 默认值 `start`
   *
   * 可选参数 `start`, `end`, `center`, `between`, `around`
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  /**
   * 垂直方向排列方式
   *
   * 默认值 `start`
   *
   * 可选参数 `start`, `center`, `end`
   */
  align?: 'start' | 'center' | 'end';
  /**
   * 是否换行
   *
   * 默认值 `false`
   *
   * 可选类型 `true`, `false`
   */
  wrap?: boolean;
  children?: any;
}

declare const Flex: ComponentClass<IProps>;

export default Flex;
