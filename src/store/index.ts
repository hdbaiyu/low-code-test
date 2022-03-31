import {
  atom,
  selector,
} from 'recoil';
import { FieldNode } from '../editor/schema/types';

const codeTreeState = atom({
  key: 'codeTreeState',
  default: '',
});

export interface FieldNodeSchema extends FieldNode {
  id: string;
  props: Record<string, any>;
  children: FieldNodeSchema[];
}



export const codeTree = selector({
  key: 'codeTree', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const tree = get(codeTreeState);

    return tree
  },
});
