import { createElement, useContext } from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form } from '@formily/antd';
import * as ICONS from '@ant-design/icons';
import EditorContext from './EditorContext';
import { SchemaFormComponents } from '@/config/components';

const normalForm = createForm({
  validateFirst: true,
});

const SchemaField = createSchemaField({
  components: SchemaFormComponents,
  scope: {
    icon(name: string) {
      return createElement((ICONS as any)[name]);
    },
  },
});

export default function CanvasPanel() {
  const { editorState } = useContext(EditorContext);

  return (
    <div className="canvas-container">
      <Form
        form={normalForm}
        // layout="vertical"
        // size="large"
        onAutoSubmit={console.log}
      >
        <SchemaField schema={editorState.schema} />
      </Form>
    </div>
  );
}
