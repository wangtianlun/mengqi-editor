import { useEffect } from 'react';
import { EditorAction } from './useAction';
import type { EditorDispatchFunc } from './useAction';

let uuid = 0;

export default function useDragAndDropEvent(dispatch: EditorDispatchFunc) {
  useEffect(() => {
    let dragged: HTMLElement;

    document.addEventListener('drag', function () {}, false);
  
    document.addEventListener(
      'dragstart',
      function (event) {
        dragged = event.target as HTMLElement;
        (event.target! as HTMLElement).style.opacity = '0.5';
      },
      false,
    );
  
    document.addEventListener(
      'dragend',
      function (event) {
        // 重置透明度
        (event.target! as HTMLElement).style.opacity = '';
      },
      false,
    );
  
    /* 放置目标元素时触发事件 */
    document.addEventListener(
      'dragover',
      function (event) {
        // 阻止默认动作以启用drop
        event.preventDefault();
      },
      false,
    );
  
    document.addEventListener(
      'dragenter',
      function (event) {
        // 当可拖动的元素进入可放置的目标时高亮目标节点
        if ((event.target! as HTMLElement).className == 'canvas-container') {
          // event.target.style.background = 'purple';
        }
      },
      false,
    );
  
    document.addEventListener(
      'dragleave',
      function (event) {
        // 当拖动元素离开可放置目标节点，重置其背景
        if ((event.target! as HTMLElement).className == 'canvas-container') {
          (event.target! as HTMLElement).style.background = '';
        }
      },
      false,
    );
  
    document.addEventListener(
      'drop',
      function (event) {
        // 阻止默认动作（如打开一些元素的链接）
        event.preventDefault();
        // 将拖动的元素到所选择的放置目标节点中
        if ((event.target! as HTMLElement).className == 'canvas-container') {
          dragged.style.opacity = '1';
          const componentName = dragged.getAttribute('data-component');
          dispatch({
            type: EditorAction.ADD,
            payload: {
              fieldName: ++uuid,
              component: componentName
            },
          });
        }
      },
      false,
    );
  }, []);
}