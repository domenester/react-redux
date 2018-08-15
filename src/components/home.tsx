import * as React from "react";

export class Home extends React.Component<any, any> {

  private name: Array<string> = ["Hello", "World"];

  constructor(props: any, context?: any){
    super(props, context);
  }

  public render() {
      return (
        <div>
          Home Content. { ...this.name }
        </div>
      );   
  }
}