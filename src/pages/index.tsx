import { Row, Col } from 'antd';
import CanvasPanel from '@/components/Canvas';
import ComponentPanel from '@/components/Component';
import SettingsPanel from '@/components/Settings';
import EditorContext from '@/components/EditorContext';
import useAction from '@/hooks/useAction';
import useDragAndDropEvent from '@/hooks/useDragAndDropEvent';

export default function IndexPage() {
  const [editorState, dispatch] = useAction();

  useDragAndDropEvent(dispatch);

  return (
    <div className="editor-container">
      <EditorContext.Provider
        value={{
          dispatch,
          editorState,
        }}
      >
        <Row gutter={8}>
          <Col span={4}>
            <ComponentPanel />
          </Col>
          <Col span={16}>
            <CanvasPanel />
          </Col>
          <Col span={4}>
            <SettingsPanel />
          </Col>
        </Row>
      </EditorContext.Provider>
    </div>
  );
}
