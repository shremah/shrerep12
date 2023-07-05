import React from 'react';
import { useConfigurator } from '@threekit-tools/treble';
import FormComponent from './FormComponent';

export const FlatForm = (props) => {
  const [attributes] = useConfigurator();
  if (!attributes) return null;

  return Object.values(attributes).map((attr) => (
    // eslint-disable-next-line react/jsx-key
    <FormComponent
      attribute={attr.name}
      includeNestedConfigurator={props.includeNestedConyarnfigurator}
    />
  ));
};

export default FlatForm;
