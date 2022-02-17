import ComponentCardItem from './ComponentCardItem';
import { SchemaFormComponents } from '@/config/components';

export default function ComponentPanel() {
  return (
    <div className="component-container">
      <div className="component-container-grid">
        {Object.keys(SchemaFormComponents).map((componentKey) => (
          <ComponentCardItem key={componentKey} componentKey={componentKey} />
        ))}
      </div>
    </div>
  );
}
