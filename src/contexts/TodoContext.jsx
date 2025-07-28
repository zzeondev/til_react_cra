// 1. Todo 를 위한 context 생성

import { createContext } from "react";

// 1.1. Todo 데이터를 위한 context
export const TodoStateContext = createContext(null);
// 1.2. Todo 데이터 업데이트를 위한 context
export const TodoDispatchContext = createContext(null);
