import { useReducer } from 'react';

export enum EditorAction {
  ADD = 'ADD'
}

export interface EditorState {
  mode: 'EDIT' | 'PREVIEW';
  schema: any;
  selectedComponentName: string | undefined;
}

export type EditorDispatchFunc = (params: {
  type: EditorAction;
  payload?: any;
}) => void;

const DefaultState: EditorState = {
  mode: 'EDIT',
  selectedComponentName: undefined,
  schema: {
    type: 'object',
    properties: {}
  }
};

function reducer(
  state: EditorState,
  action: { type: EditorAction; payload?: any },
): EditorState {
  switch (action.type) {
    case EditorAction.ADD:
      return {
        ...state,
        schema: {
          type: 'object',
          properties: {
            ...state.schema.properties,
            [action.payload?.fieldName]: {
              type: 'string',
              title: action.payload?.fieldName,
              required: true,
              'x-decorator': 'FormItem',
              'x-component': action.payload.component,
              'x-component-props': {
                prefix: "{{icon('UserOutlined')}}",
              },
            }
          }
        }   
      };
  }
}

export default function useAction(): [EditorState, EditorDispatchFunc] {
  const [state, dispatch] = useReducer(reducer, DefaultState);

  return [state, dispatch];
}