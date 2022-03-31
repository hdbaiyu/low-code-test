import { useState } from 'react';

import { Switch } from 'antd';
import cl from 'classnames';
import Left from './Left';
import Right from './Right';
import Canvas from './Canvas';
import SaveBtn from './SaveBtn';
import ShowCodeBtn from './ShowCodeBtn';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { RecoilRoot } from 'recoil';


function Editor() {
  const [checked, setChecked] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <RecoilRoot>
        <div className="h-screen flex flex-col text-gray-600">
          <main className="flex-1 overflow-hidden flex">
            <Left />
            <Canvas mobile={checked} />
            <Right />
          </main>
        </div>
      </RecoilRoot>
    </DndProvider>
  );
}
export default Editor;
