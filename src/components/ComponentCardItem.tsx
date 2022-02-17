import type { FC } from 'react';
import { useRef } from 'react';
import { SchemaFormComponentsLabel } from '@/config/components';

interface IComponentProps {
  componentKey: string;
}

const ComponentCardItem: FC<IComponentProps> = ({ componentKey }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const componentName = SchemaFormComponentsLabel.get(componentKey);

  return (
    <div
      className="component-card-item-container"
      draggable={true}
      ref={domRef}
      data-component={componentKey}
    >
      {componentName}
    </div>
  );
};

export default ComponentCardItem;
