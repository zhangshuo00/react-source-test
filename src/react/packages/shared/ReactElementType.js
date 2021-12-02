/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type Source = {|
  fileName: string,
  lineNumber: number,
|};

export type ReactElement = {|
  // 用于辨别 ReactElement 对象
  $$typeof: any,
  type: any, // 节点的种类
  key: any,
  ref: any,
  props: any,
  // ReactFiber 记录创建本对象的 Fiber 节点，还未与 Fiber 树关联之前，该属性为 null
  _owner: any,

  // __DEV__ dev 环境中的一些额外信息，例如文件路径，文件名，行列信息等
  _store: {validated: boolean, ...},
  _self: React$Element<any>,
  _shadowChildren: any,
  _source: Source,
|};
