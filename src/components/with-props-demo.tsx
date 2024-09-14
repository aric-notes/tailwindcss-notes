import React, { ComponentType } from 'react';

const withProps = (WrappedComponent: ComponentType, props: any) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...props} {...this.props} />;
    }
  };
};

const MyComponent = ({ name, age }: any) => {
  return (
    <div>
      My name is {name} and I am {age} years old
    </div>
  );
};

MyComponent.withProps = withProps;

const MyEnhancedComponent = withProps(MyComponent, { name: 'John', age: 30 });

export default MyEnhancedComponent;
