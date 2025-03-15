import withProps from '@jswork/with-props';
import { FC } from 'react';

// Define a simple functional component
interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent: FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div>
      <p className="mobile:fw-8 desktop:fw-1">{title}</p>
      {description && <p className="fw-4">{description}</p>}
    </div>
  );
};

// Create the enhanced component using withProps and add withProps method
const EnhancedMyComponent = withProps<MyComponentProps>(
  { description: 'Default description' },
  MyComponent
) as FC<MyComponentProps> & {
  withProps: (defaultProps: Partial<MyComponentProps>) => FC<MyComponentProps>;
};

// Add the withProps method to the enhanced component
// @ts-nocheck
// EnhancedMyComponent.withProps = (defaultProps: Partial<MyComponentProps>) => {
//   return withProps(defaultProps, MyComponent);
// };

export default EnhancedMyComponent;

// Usage example of EnhancedMyComponent with withProps
// const ExampleUsage = () => {
//   const CustomizedComponent = EnhancedMyComponent.withProps({
//     description: 'Overridden default description'
//   });
//
//   return (
//     <>
//       <EnhancedMyComponent title="Hello World" />
//       <CustomizedComponent title="Customized Title" />
//     </>
//   );
// };
//
// export default ExampleUsage;
