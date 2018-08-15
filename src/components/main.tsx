import * as React from "react";

export class Main extends React.Component<any, any> {

  private name: Array<string> = ["Hello", "World"];

  constructor(props: any, context?: any){
    super(props, context);
  }

  public render() {
      return (
        <div>
          Main Content. { ...this.name }
        </div>
      );   
  }
}